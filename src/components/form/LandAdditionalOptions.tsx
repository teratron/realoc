import {OtherOptions} from "./fields";
import {Form, InputGroup} from "react-bootstrap";

type Params = {
    landType: string
}

export function LandAdditionalOptions({landType}: Params) {
    let otherOptions: Record<string, string> = {}
    if (landType === 'AGRO') {
        otherOptions = {
            'land_garden': 'Grădină',
            'land_vineyards': 'Podgorii',
        }
    }
    if (landType === 'LAKE') {
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

    return (
        <div className="app-card pb-1">
            {landType === 'AGRO' && (
                <>
                    <Form.Group>
                        <Form.Label htmlFor="land-quality-from">Bonitatea terenul</Form.Label>
                        <div className="row">
                            <div className="col">
                                <Form.Control
                                    id="land-quality-from"
                                    type="text"
                                    name="land_quality_from"
                                    placeholder="De la"
                                />
                            </div>
                            <div className="col">
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        name="land_quality_to"
                                        placeholder="Până la"
                                    />
                                    <InputGroup.Text>bal</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </div>
                    </Form.Group>

                    <OtherOptions options={otherOptions}/>
                </>
            )}
            {['BUILDING', 'LAKE'].includes(landType) && (
                <OtherOptions options={communications} label="Comunicații"/>
            )}
            {landType === 'LAKE' && (<OtherOptions options={otherOptions}/>)}
        </div>
    )
}
