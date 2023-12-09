import {Form} from "react-bootstrap";
import {FormikProps} from "formik";
import {CreateType} from "../../../utils/CreateType.ts";
import {Required} from "./Required.tsx";

type Params = {
    formik: FormikProps<CreateType>
    multiple: boolean
    required: boolean
}

export function Rooms({formik, multiple, required}: Params){
    return (
        <Form.Group controlId="number-rooms-1">
            <Form.Label>
                Numărul de camere
                {required && (<Required dataName="rooms" />)}
            </Form.Label>
            {[
                '1', '1.5', '2', '2.5', '3', '4.5', '4+'
            ].map((value, index) => (
                <Form.Check
                    key={`number-rooms-${index}`}
                    id={`number-rooms-${index + 1}`}
                    type={multiple ? "checkbox" : "radio"}
                    label={value}
                    value={value}
                    name="rooms"
                    className="form-cracker"
                    checked={formik.values.rooms.includes(value)}
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}
