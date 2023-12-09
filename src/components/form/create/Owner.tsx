import {Form} from "react-bootstrap";
import {CreateType, FormikAware, RequiredOptions} from "../../../utils";
import {Required} from "./Required.tsx";

export function Owner({formik, required}: FormikAware<CreateType> & RequiredOptions) {
    return (
        <>
            <Form.Group>
                <Form.Label>
                    Proprietar
                    {required && <Required dataName="owner"/>}
                </Form.Label>
                {Object.entries({
                    'INDIVIDUAL': 'Persoană fizică',
                    'LEGAL': 'Persoană juridică',
                }).map(([value, label], index) => (
                    <Form.Check
                        key={`owner-${index}`}
                        id={`owner-${index + 1}`}
                        type="radio"
                        label={label}
                        value={value}
                        name="owner"
                        className="form-cracker"
                        checked={formik.values.owner === value}
                        onChange={formik.handleChange}
                    />
                ))}
            </Form.Group>

            {formik.values.owner === 'LEGAL' && (
                <Form.Group>
                    <Form.Label>
                        TVA
                        {required && <Required dataName="owner_vat"/>}
                    </Form.Label>
                    {Object.entries({
                        1: 'Plătitor',
                        0: 'Neplătitor',
                    }).map(([value, label], index) => (
                        <Form.Check
                            key={`owner_vat-${index}`}
                            id={`owner_vat-${index + 1}`}
                            type="radio"
                            label={label}
                            value={value}
                            name="owner_vat"
                            className="form-cracker"
                            checked={formik.values.owner_vat === value}
                            onChange={formik.handleChange}
                        />
                    ))}
                </Form.Group>
            )}
        </>
    )
}