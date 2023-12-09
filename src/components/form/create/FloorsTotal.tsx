import {Form} from "react-bootstrap";
import {FormikProps} from "formik";
import {CreateType} from "../../../utils/CreateType.ts";
import {Required} from "./Required.tsx";

type Params = {
    formik: FormikProps<CreateType>
    label: string
    required: boolean
}

export function FloorsTotal({formik, label, required}: Params) {
    return (
        <Form.Group>
            <Form.Label htmlFor="apt_levels_total">
                {label}
                {required && <Required dataName="apt_levels_total" />}
            </Form.Label>
            <Form.Control
                type="text"
                name="apt_levels_total"
                placeholder="Selectați"
                value={formik.values.apt_levels_total}
                onChange={formik.handleChange}
            />
        </Form.Group>
    )
}
