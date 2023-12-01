import {PriceRange, PriceUnit, TotalArea} from "./fields";

type Params = {
    offertType: string
}

export function OfficeOptions({offertType}: Params) {
    return (
        <div className="app-card">
            <PriceRange offertType={offertType}/>
            <PriceUnit />
            <TotalArea />
        </div>
    )
}
