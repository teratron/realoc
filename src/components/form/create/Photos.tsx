import {Form} from "react-bootstrap";
import {Required} from "./Required.tsx";
import * as conf from "../../../config.ts";
import iconAddPhoto from "../../../media/icon_add_photo.svg";
import iconNote from "../../../media/icon_note_grey_circle.svg";
import {ChangeEvent, useState} from "react";

export function Photos() {
    const [photos, setPhotos] = useState<File[]>([])
    const onChange = (event: ChangeEvent) => {
        const files = []
        // @ts-ignore
        for (const file of event.currentTarget.files) {
            files.push(file)
        }
        setPhotos(files)
    }

    return (
        <div className="app-card">
            <Form.Group controlId="add-photo">
                <Form.Label>
                    Fotografie
                    <Required dataName="photos"/>
                    <span className="foot">{photos.length}/{conf.MAX_PHOTOS}</span>
                </Form.Label>
                <div className="gallery-thumb">
                    {photos.map(photo => (
                        <div key={window.crypto.randomUUID().toString()}>
                            <img src={URL.createObjectURL(photo)} alt=""/>
                        </div>
                    ))}
                </div>
                <Form.Control
                    type="file"
                    name="photos"
                    className="form-add-photo"
                    multiple
                    accept="image/*"
                    maxLength={conf.MAX_PHOTOS}
                    onChange={onChange}
                />
                <Form.Label><img src={iconAddPhoto} alt=""/>Adaugă fotografie</Form.Label>
            </Form.Group>

            <div className="alert alert-light">
                <img src={iconNote} alt=""/>
                <div>Primele 3 fotografii vor fi folosite pentru coperta anunțului.</div>
            </div>
        </div>
    )
}
