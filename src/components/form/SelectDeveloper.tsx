import {Form, InputGroup} from 'react-bootstrap'
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import iconSearch from '../../media/icon_search.svg'
import {Developer, DeveloperList, listDevelopers, orderList} from "../../api";

type Params = {
    onSelected: (data: DeveloperList) => void
}
export function SelectDeveloper({onSelected}: Params) {
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


    const [selected, setSelected] = useState<DeveloperList>([])
    const handleSelectItem = (event: ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(event.target.value)
        let result
        if (event.target.checked) {
            const selectedObject = list.filter((d) => d.id === id)
            result = [...selected, ...selectedObject]
        } else {
            result = selected.filter((d) => d.id !== id)
        }

        setSelected(result)
        onSelected(result)
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
                                    type="checkbox"
                                    label={value.name}
                                    value={value.id}
                                    className="custom-checkbox list-item"
                                    onChangeCapture={handleSelectItem}
                                />
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
