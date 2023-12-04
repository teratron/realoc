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
        listLocations().then(data => {
            setItems(data)
        })
    }, []);

    let [locations, setLocations] = useState<LocationList>({})
    useEffect(() => {
        setLocations(reorderLocations(items))
    }, [items]);

    let [letters, setLetters] = useState<string[]>([])
    useEffect(() => {
        const keys = Object.keys(locations).filter(k => !['popular'].includes(k))

        setLetters(keys.sort())
    }, [locations]);

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
    )
}