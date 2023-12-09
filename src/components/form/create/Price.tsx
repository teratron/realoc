import {Form, InputGroup} from "react-bootstrap";
import {CreateType, FormikAware, RequiredOptions} from "../../../utils";
import {Required} from "./Required.tsx";

type Params = FormikAware<CreateType> & RequiredOptions

export function Price({formik, required}: Params) {
    return (
        <Form.Group>
            <Form.Label htmlFor="price">
                {formik.values.offert_type === 'SELL' ? 'Preț vânzare' : 'Preț chirie/lună'}
                {required && <Required dataName="price"/>}
            </Form.Label>
            <InputGroup>
                <Form.Control
                    type="text"
                    name="price"
                    placeholder="Indicați preț"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                />
                <InputGroup.Text>€</InputGroup.Text>
            </InputGroup>
        </Form.Group>
    )
}
