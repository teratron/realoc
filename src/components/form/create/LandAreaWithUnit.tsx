import {CreateType, FormikAware, RequiredOptions} from "../../../utils";
import {Form, InputGroup} from "react-bootstrap";
import {Required} from "./Required.tsx";

export function LandAreaWithUnit({formik, required}:FormikAware<CreateType> & RequiredOptions){
    const units: Record<string, {label: string, short: string}> = {
        'ar': {
            label: 'Ari',
            short: 'ari',
        },
        'ha': {
            label: 'Hectare',
            short: 'ha',
        },
    }

    return (
        <>
            <Form.Group>
                <Form.Label htmlFor="area-from">
                    Suprafață teren
                    {required && <Required dataName="land_area"/>}
                </Form.Label>
                <div className="row">
                    <div className="col">
                        <InputGroup>
                            <Form.Control
                                name="land_area"
                                type="text"
                                placeholder="Indicați suprafața"
                                onChange={formik.handleChange}
                            />
                            <InputGroup.Text>{units[formik.values.land_area_unit || 'ar'].short}</InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
            </Form.Group>
            <Form.Group>
                {Object.entries(units).map(([value, data], index) => (
                    <Form.Check
                        key={`land-area-unit-${index}`}
                        id={`land-area-unit-${index + 1}`}
                        type="radio"
                        label={data.label}
                        value={value}
                        name="land_area_unit"
                        checked={formik.values.land_area_unit === value}
                        onChange={formik.handleChange}
                        inline
                    />
                ))}
            </Form.Group>
        </>

    )
}
