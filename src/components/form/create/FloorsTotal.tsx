import {Form} from "react-bootstrap";
import {FormikProps} from "formik";
import {CreateType} from "../../../utils";
import {Required} from "./Required.tsx";

type Params = {
    formik: FormikProps<CreateType>
    label: string
    required: boolean
}

export function FloorsTotal({formik, label, required}: Params) {
    return (
        <Form.Group>
            <Form.Label htmlFor="levels_total">
                {label}
                {required && <Required dataName="levels_total" />}
            </Form.Label>
            <Form.Control
                type="text"
                name="levels_total"
                value={formik.values.levels_total}
                onChange={formik.handleChange}
            />
        </Form.Group>
    )
}
