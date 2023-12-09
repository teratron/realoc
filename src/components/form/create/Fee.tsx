import {CreateType, FormikAware} from "../../../utils";
import {Form} from "react-bootstrap";
import iconNote from "../../../media/icon_note_grey_circle.svg";

export function Fee({formik}: FormikAware<CreateType>) {
    return (
        <div className="app-card">
            <Form.Group controlId="transaction-fee-1">
                <Form.Label>Comision de tranzacție</Form.Label>
                {[
                    '0.5%', '1.5%', '1.5%', '2%', '2.5%', '3%', 'Alt'
                ].map((value, index) => (
                    <Form.Check
                        key={`transaction-fee-${index}`}
                        id={`transaction-fee-${index + 1}`}
                        label={value}
                        name="transaction_fee"
                        type="radio"
                        className="form-cracker"
                        checked={formik.values.transaction_fee === value}
                        onChange={formik.handleChange}
                    />
                ))}
            </Form.Group>

            <div className="alert alert-light">
                <img src={iconNote} alt=""/>
                <div>
                    Comisionul e procentajul din suma totală a tranzacției pe care ești dispus să îl împarți cu afiliatul.
                </div>
            </div>
        </div>
    )
}