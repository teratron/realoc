import Attribute from '../../utils/Attribute.tsx'
import Children from '../../utils/Children.tsx'
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
