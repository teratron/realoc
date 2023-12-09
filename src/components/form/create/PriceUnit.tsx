import {Form} from "react-bootstrap";
import {FormikProps} from "formik";
import {CreateType} from "../../../utils/CreateType.ts";

type Params = {
    formik: FormikProps<CreateType>
}

export function PriceUnit({formik}: Params) {
    return (
        <Form.Group>
            {Object.entries({
                'total': 'Preț total',
                'm2': 'Preț m²'
            }).map(([value, label], index) => (
                <Form.Check
                    key={`price-type-${index}`}
                    id={`price-type-${index + 1}`}
                    type="radio"
                    label={label}
                    value={value}
                    name="price_type"
                    checked={formik.values.price_type === value}
                    onChange={formik.handleChange}
                    inline
                />
            ))}
        </Form.Group>
    )
}
