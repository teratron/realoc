import {Form} from "react-bootstrap";
import {FormikProps} from "formik";
import {CreateType} from "../../../utils/CreateType.ts";

type Params = {
    formik: FormikProps<CreateType>
}

export function Price({formik}: Params) {
    return (
        <Form.Group>
            <Form.Label htmlFor="price">
                {formik.values.offert_type === 'SELL' ? 'Preț vânzare' : 'Preț chirie/lună'}
            </Form.Label>
            <Form.Control
                type="text"
                name="price"
                placeholder="Indicați preț"
                value={formik.values.price}
                onChange={formik.handleChange}
            />
        </Form.Group>
    )
}
