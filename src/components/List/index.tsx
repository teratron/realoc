import Attribute from '../../utils/Attribute'
import Children from '../../utils/Children'
import './_list.scss'

interface ListProps extends Attribute, Children {
    gap?: number
}

function List(props: ListProps) {

    return (
        <div className="list">
            {props.children}
        </div>
    )
}

export default List
