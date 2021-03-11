import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        updateItem,
        deleteItem,
        item,
        active=true,
        paddingLeft=false
    }) => {

    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active ? 'active' : ''}`}
                          to={to}>
                        {item.title}
                        <i onClick={() => setEditing(true)}
                           className={`fas fa-pencil-alt float-right ${paddingLeft ? 'webb-padding-left' : ''}`}></i>
                    </Link>
                </>
            }
            {
                editing &&
                <>
                    <input onChange={(e) =>
                        setCachedItem({
                            ...cachedItem,
                            title: e.target.value
                        })}
                           value={cachedItem.title}
                           className="form-control webb-form-allow"/>
                    <span className="fa-pull-right webb-width-18">
                        <i onClick={() => {
                            setEditing(false)
                            updateItem(cachedItem)
                        }} className="fas fa-check"></i>

                        <i onClick={() => {
                            setEditing(false)
                            deleteItem(item)
                        }}
                           className="fas fa-times"></i>
                    </span>
                </>
            }
        </>
    )
}


export default EditableItem