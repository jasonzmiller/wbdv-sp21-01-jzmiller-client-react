import React, {useState} from 'react'

const EditableItem = (
    {
        updateItem,
        deleteItem,
        item = {
            title: "some title",
            _id: "ABC"
        }
    }) => {

    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {
                !editing &&
                <>
                    {item.title}
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
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