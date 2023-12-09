import {Form} from "react-bootstrap";
import {FormikProps} from "formik";
import {CreateType} from "../../../utils";
import {Required} from "./Required.tsx";

type Params = {
    formik: FormikProps<CreateType>
    label: string
    required: boolean
}

export function Floor({formik, label, required}: Params) {
    return (
        <Form.Group>
            <Form.Label htmlFor="level">
                {label}
                {required && <Required dataName="level" />}
            </Form.Label>
            <Form.Control
                type="text"
                name="level"
                value={formik.values.level}
                onChange={formik.handleChange}
            />
        </Form.Group>
    )
}
