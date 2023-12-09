import {Form} from "react-bootstrap";
import {FormikProps} from "formik";
import {CreateType} from "../../utils/CreateType.ts";

type Params = {
    formik: FormikProps<CreateType>
}

export function TypeOptions({formik}: Params) {
    return (
        <div className="app-card">
            <Form.Group>
                <Form.Label htmlFor="transaction-type-1">Tip tranzacție</Form.Label>
                <div className="form-tab">
                    <Form.Control
                        id="transaction-type-1"
                        name="offert_type"
                        value="SELL"
                        type="radio"
                        onChange={formik.handleChange}
                        checked={formik.values.offert_type === 'SELL'}
                    />
                    <label htmlFor="transaction-type-1">De vânzare</label>

                    <Form.Control
                        id="transaction-type-2"
                        name="offert_type"
                        value="RENT"
                        type="radio"
                        onChange={formik.handleChange}
                        checked={formik.values.offert_type === 'RENT'}
                    />
                    <label htmlFor="transaction-type-2">De închiriat</label>
                </div>
            </Form.Group>

            <Form.Group controlId="property-type">
                <Form.Label>Tip proprietate</Form.Label>
                <Form.Select name="type" onChange={formik.handleChange} value={formik.values.type}>
                    <option value="APARTMENT">Apartament</option>
                    <option value="HOUSE">Casă</option>
                    <option value="OFFICE">Oficiu</option>
                    <option value="COMMERCIAL">Spațiu comercial</option>
                    <option value="WAREHOUSE">Spațiu producție/depozit</option>
                    <option value="LAND">Lot de teren</option>
                    <option value="PARKING">Parcare</option>
                </Form.Select>
            </Form.Group>
        </div>
    )
}
