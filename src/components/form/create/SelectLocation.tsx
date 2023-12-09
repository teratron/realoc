import {listLocations, Location, LocationList, reorderLocations} from "../../../api";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Form, InputGroup} from "react-bootstrap";
import iconSearch from "../../../media/icon_search.svg";
import {CreateType, FormikAware, MultipleOptions} from "../../../utils";
import {LocationTree} from "./LocationTree.tsx";

export function SelectLocation({formik, multiple}: FormikAware<CreateType> & MultipleOptions) {
    let [items, setItems] = useState<Location[]>([])
    useEffect(() => {
        listLocations().then(data => {
            setItems(data)
        })
    }, [])

    const [searchQuery, setSearchQuery] = useState('')
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }

    let [locations, setLocations] = useState<LocationList>({})
    let [letters, setLetters] = useState<string[]>([])
    const filterByName = (l: Location, query: string): boolean => {
        if (l.name.toLowerCase().startsWith(query)) {
            return true
        }
        if (l.children.length) {
            return l.children.some((loc) => filterByName(loc, query))
        }
        return false
    }
    useEffect(() => {
        let filtered = items
        if (searchQuery.length) {
            const query = searchQuery.toLowerCase()
            filtered = items.filter(l => filterByName(l, query))
        }
        const result = reorderLocations(filtered)
        const keys = Object.keys(result).filter(k => !['popular'].includes(k)).sort()

        setLocations(result)
        setLetters(keys)
    }, [items, searchQuery]);

    const stopPropagation = (e: FormEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        let selectedItems
        if (multiple && Array.isArray(formik.values.location)) {
            const ids = formik.values.location
            selectedItems = items.filter(v => ids.includes(v.id.toString()))
        } else {
            selectedItems = items.filter(v => formik.values.location === v.id.toString())
        }

        let preview = selectedItems.slice(0, 3).map(v => v.name).join(', ')
        if (selectedItems.length > 3) {
            preview += `, +${selectedItems.length-3}`
        }
        formik.setFieldValue('location_preview', preview).catch()
    }, [formik.values.location])

    return (
        <div className="app-container" onChange={stopPropagation}>
            <div className="app-form">
                <Form.Group>
                    <InputGroup>
                        <InputGroup.Text>
                            <img src={iconSearch} alt=""/>
                        </InputGroup.Text>
                        <Form.Control
                            name="selectLocation"
                            type="text"
                            placeholder="Municipiu, raion, oraș, sector"
                            className="search-control"
                            onChange={handleSearch}
                        />
                    </InputGroup>
                </Form.Group>

                <div className="app-card">
                    <h3>Localități populare</h3>
                    <LocationTree items={locations.popular || []} level={0} formik={formik} multiple={multiple}/>
                </div>

                {letters.map(l => {
                    return (
                        <div className="app-card" key={`l-${l}`}>
                            <h3 className="alphabet">{l}</h3>
                            <LocationTree items={locations[l] || []} level={0} formik={formik} multiple={multiple}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}