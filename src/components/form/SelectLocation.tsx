import {listLocations, Location, LocationList, reorderLocations} from "../../api";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Form, InputGroup} from "react-bootstrap";
import iconSearch from "../../media/icon_search.svg";
import {LocationTree} from "./fields";

type Params = {
    onSelected: (data: Location[]) => void
}

export function SelectLocation({onSelected}: Params) {
    let [items, setItems] = useState<Location[]>([])
    useEffect(() => {
        console.log('loading location list')
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

    const [selected, setSelected] = useState<Location[]>([])
    const handleSelectItem = (event: ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(event.target.value)
        let result
        if (event.target.checked) {
            const selectedObject = items.filter((d) => d.id === id)
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
                    <LocationTree items={locations.popular || []} onSelected={handleSelectItem} level={0}/>
                </div>

                {letters.map(l => {
                    return (
                        <div className="app-card" key={`l-${l}`}>
                            <h3 className="alphabet">{l}</h3>
                            <LocationTree items={locations[l] || []} onSelected={handleSelectItem} level={0}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}