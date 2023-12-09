import {Form} from 'react-bootstrap'
import Header from '../containers/Header'
import Main from '../containers/Main'
import * as conf from '../config.ts'
import iconNote from '../media/icon_note_grey_circle.svg'
import iconAddPhoto from '../media/icon_add_photo.svg'
import {Formik, FormikProps} from "formik";
import {TypeOptions} from "../components/form";
import {CreateType} from "../utils";
import {ApartmentAdditionalOptions, ApartmentOptions, Required} from "../components/form/create";
import {Fee} from "../components/form/create/Fee.tsx";
import {Location} from "../components/form/create/Location.tsx";

function AddSale() {
    const state: CreateType = {
        offert_type: 'SELL',
        type: 'APARTMENT',
        price_type: 'total',
        apt_building_type: 'NEW',
        rooms: '',
        price: '',
        area: '',
        mortgage: '',
        reparation: '',
        level: '',
        apt_levels_total: '',
        elevator: '',
        apt_animals_allowed: '',
        apt_kids_allowed: '',
        apt_parking: '',
        construction_date: '',
        description: '',
        furniture: '',
        transaction_fee: '',
        developer: '',
        developer_preview: '',
        location: '',
        location_preview: '',
    }

    const formSubmitHandler = async (values: CreateType) => {
        console.log('formSubmitHandler', values);
    }

    const data = (formik: FormikProps<any>) => {
        console.log(formik.values.location, formik.values.location_preview);
        return '';
    }
    return (
        <Formik onSubmit={formSubmitHandler} initialValues={state}>
            {formik => (
                <>
                    <Header title="Add Sale"/>
                    <Main>
                        <Form
                            id="add-sale-form"
                            className="app-form"
                            onSubmit={formik.handleSubmit}
                        >
                            <h2>Adaugă imobiliare</h2>

                            <div>{data(formik)}</div>

                            <TypeOptions formik={formik} />

                            {formik.values.type === "APARTMENT" && <ApartmentOptions formik={formik} />}


                            <div className="app-card">
                                <Location formik={formik} multiple={false}/>
                            </div>

                            {/******************************************************
                             * Photo Block
                             *******************************************************/}
                            <div className="app-card">
                                <Form.Group controlId="add-photo">
                                    <Form.Label>
                                        Fotografie
                                        <Required dataName="addPhoto" />
                                        <span className="foot">5/{conf.MAX_PHOTOS}</span>
                                    </Form.Label>
                                    <div className="gallery-thumb">
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                    </div>
                                    <Form.Control
                                        type="file"
                                        name="addPhoto"
                                        className="form-add-photo"
                                        multiple
                                    />
                                    <Form.Label><img src={iconAddPhoto} alt=""/>Adaugă fotografie</Form.Label>
                                </Form.Group>

                                <div className="alert alert-light">
                                    <img src={iconNote} alt=""/>
                                    <div>Primele 3 fotografii vor fi folosite pentru coperta anunțului.</div>
                                </div>
                            </div>

                            {formik.values.type === "APARTMENT" && <ApartmentAdditionalOptions formik={formik} multiple={false}/>}


                            <Fee formik={formik} />

                            <div className="navbar">
                                <div className="app-container">
                                    <button
                                        type="submit"
                                        className="btn btn-primary">
                                        Adaugă anunțe
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </Main>
                </>
            )}
        </Formik>
    )
}

export default AddSale
