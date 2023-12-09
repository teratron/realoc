import iconStar from "../../../media/icon_sulafat.svg";
import iconInvalid from "../../../media/icon_invalid_red_circle.svg";

function Star() {
    return <img src={iconStar} alt=""/>
}

function Feedback({dataName = ''}) {
    return (
        <span
            className="feedback"
            data-name={dataName}>
            Obligatoriu <img src={iconInvalid} alt=""/>
        </span>
    )
}

type Params = {
    dataName: string
}
export function Required({dataName}: Params){
    return (
        <>
            <Star/><Feedback dataName={dataName}/>
        </>
    )
}