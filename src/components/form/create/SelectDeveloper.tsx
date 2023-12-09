import {Form, InputGroup} from 'react-bootstrap'
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import iconSearch from '../../../media/icon_search.svg'
import {Developer, DeveloperList, listDevelopers, orderList} from "../../../api";
import {CreateType, FormikAware, MultipleOptions} from "../../../utils";

type Params = FormikAware<CreateType> & MultipleOptions
export function SelectDeveloper({formik, multiple}: Params) {
    // Prevent events in popup to trigger parent form updates.
    const stopPropagation = (e: FormEvent) => {
        e.stopPropagation()
    }

    const [list, setList] = useState<DeveloperList>([])
    useEffect(() => {
        listDevelopers().then(data => setList(data))
    }, [setList])

    const [searchQuery, setSearchQuery] = useState('')
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }

    const [letters, setLetters] = useState<string[]>([])
    const [items, setItems] = useState<Record<string, Developer[]>>({})
    useEffect(() => {
        let filtered = list
        if (searchQuery.length) {
            const query = searchQuery.toLowerCase()
            filtered = list.filter(v => v.name.toLowerCase().startsWith(query))
        }
        const ordered = orderList(filtered)
        setItems(ordered)
        setLetters(Object.keys(ordered).sort())
    }, [list, searchQuery])

    useEffect(() => {
        let selectedItems
        if (multiple && Array.isArray(formik.values.developer)) {
            const ids = formik.values.developer
            selectedItems = list.filter(v => ids.includes(v.id.toString()))
        } else {
            selectedItems = list.filter(v => formik.values.developer === v.id.toString())
        }

        let preview = selectedItems.slice(0, 3).map(v => v.name).join(', ')
        if (selectedItems.length > 3) {
            preview += `, +${selectedItems.length-3}`
        }
        formik.setFieldValue('developer_preview', preview).catch()
    }, [formik.values.developer])

    const isChecked = (id: number): boolean => {
        if (multiple && Array.isArray(formik.values.developer)) {
            return formik.values.developer.includes(id.toString())
        } else {
            return formik.values.developer === id.toString()
        }
    }

    return (
        <div className="app-container" onChange={stopPropagation}>
            <div className="app-form">
                <Form.Group controlId="developer">
                    <InputGroup>
                        <InputGroup.Text>
                            <img src={iconSearch} alt=""/>
                        </InputGroup.Text>
                        <Form.Control
                            name="selectDeveloper"
                            type="text"
                            placeholder="Dezvoltator"
                            className="search-control"
                            onChange={handleSearch}
                        />
                    </InputGroup>
                </Form.Group>

                {letters.map((letter) => {
                    return (
                        <div className="app-card form-list" key={`l-${letter}`}>
                            <h3 className="alphabet">{letter}</h3>
                            {items[letter].map((value, index) => (
                                <Form.Check
                                    key={`select-developer-${letter}-${index}`}
                                    id={`select-developer-${letter}-${index + 1}`}
                                    type={multiple ? 'checkbox' : 'radio'}
                                    label={value.name}
                                    value={value.id}
                                    className="custom-checkbox list-item"
                                    name="developer"
                                    checked={isChecked(value.id)}
                                    onChange={formik.handleChange}
                                />
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
