import {Form} from "react-bootstrap";
import {Furniture} from "./Furniture.tsx";
import {useState} from "react";

type Params = {label: string, reparationOptions: Record<string, string>}

export function BuildingState({label, reparationOptions}: Params) {
    const [reparation, setReparation] = useState<string[]>([])
    const handleReparationChange = (event: any) => {
        let result
        if (event.target.checked) {
            result = [...reparation, event.target.value]
        } else {
            result = reparation.filter((r) => r != event.target.value)
        }
        setReparation(result)
    }

    const intersect = (array1: string[], array2: string[]): boolean => {
        const intersection = array1.filter(value => array2.includes(value))
        return intersection.length > 0
    }

    return(
        <div className="app-card pb-1">
            <Form.Group controlId="apartment-status-1">
                <Form.Label>{label}</Form.Label>
                {Object.entries(reparationOptions).map(([value, label], index) => (
                    <Form.Check
                        key={`apartment-status-${index}`}
                        id={`apartment-status-${index + 1}`}
                        type="checkbox"
                        label={label}
                        value={value}
                        name="reparation"
                        className="form-cracker"
                        onChange={handleReparationChange}
                    />
                ))}
            </Form.Group>

            {!intersect(['WHITE', 'GRAY'], reparation) && (<Furniture/>)}
        </div>
    )
}