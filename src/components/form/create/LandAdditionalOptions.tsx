import {Form, InputGroup} from "react-bootstrap";
import {CreateType, FormikAware} from "../../../utils";
import {OtherOptions} from "./OtherOptions.tsx";
import {Description} from "./Description.tsx";

export function LandAdditionalOptions({formik}: FormikAware<CreateType>) {
    let otherOptions: Record<string, string> = {}
    if (formik.values.land_type === 'AGRO') {
        otherOptions = {
            'land_garden': 'Grădină',
            'land_vineyards': 'Podgorii',
        }
    }
    if (formik.values.land_type === 'LAKE') {
        otherOptions = {
            'land_forest': 'Lângă pădure',
            'land_cottages': 'Cabane',
            'land_pavilion': 'Foișoare',
        }
    }
    const communications = {
        land_electricity: 'Electricitate',
        land_gas: 'Gazificare',
        land_canalization: 'Canalizare',
        land_water: 'Alimentare cu apă',
    }
    const intersect = (options: string[], value: undefined|string|string[]): boolean => {
        if (!value) {
            return false
        }
        if (Array.isArray(value)) {
            return options.filter(value => value.includes(value)).length > 0
        }

        return options.includes(value)
    }

    return (
        <div className="app-card pb-1">
            {formik.values.land_type === 'AGRO' && (
                <>
                    <Form.Group>
                        <Form.Label htmlFor="land-quality-from">Bonitatea terenul</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                name="land_quality"
                                placeholder="Până la"
                            />
                            <InputGroup.Text>bal</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>

                    <OtherOptions options={otherOptions} formik={formik} label=""/>
                </>
            )}
            {intersect(['BUILDING', 'LAKE'], formik.values.land_type) && (
                <OtherOptions options={communications} label="Comunicații" formik={formik}/>
            )}
            {formik.values.land_type === 'LAKE' && (<OtherOptions options={otherOptions} formik={formik} label=''/>)}
            <Description formik={formik}/>
        </div>
    )
}
