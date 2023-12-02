import {Accordion, Form} from "react-bootstrap";
import {Location} from "../../../api";
import {ChangeEvent} from "react";

type Params = {
    items: Location[],
    onSelected: (event: ChangeEvent<HTMLInputElement>) => void
    level: number
}

export function LocationTree({items, level, onSelected}: Params) {
    return (
        <>
            {items.map((location: Location) => {
                if(location.children.length === 0) {
                    return (
                        <Form.Check
                            key={`location-${location.id}`}
                            id={`location-${location.id}`}
                            type="checkbox"
                            label={location.name}
                            value={location.id}
                            className="custom-checkbox"
                            onChange={onSelected}
                        />
                    )
                }
                return (
                    <Accordion flush={level === 0} key={`acc-${location.id}`}>
                        <Accordion.Item eventKey={`${location.id}-${level}`}>
                            <Accordion.Button as="div" className="partially">
                                {location.name}
                                <small>{location.children.length} localități</small>
                            </Accordion.Button>
                            <Accordion.Body>
                                <LocationTree items={location.children} onSelected={onSelected} level={level + 1}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )
            })}
        </>
    )
}
