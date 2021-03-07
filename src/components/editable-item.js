import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        updateItem,
        deleteItem,
        item = {
            title: "some title",
            _id: "ABC"
        },
        active=true
    }) => {

    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active ? 'active': ''}`} to={to}>
                        {item.title} {item._id}
                        <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
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
                           className="form-control"/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
                </>
            }
        </>
    )
}



export default EditableItem