import React, { useState } from 'react';

const ListWidget = (
    {
        widget,
        updateWidget,
        deleteWidget,
        editing,
        setEditingWidget
    }
) => {

    const [ cachedWidget , setCachedWidget ] = useState( widget );

    const [ editingOrdered , setEditingOrdered ] = useState( widget.ordered );


    return(
        <>
            {
                editing &&
                <>
                    <span className="float-right">
                        <i className="fas fa-check"
                           onClick={() => {
                               updateWidget(widget.id, cachedWidget)
                               setEditingWidget({})
                               setCachedWidget(widget)
                           }}></i>
                        <i className="fas fa-trash"
                           onClick={() => {deleteWidget(widget.id)}}></i>
                    </span>
                    <input checked={editingOrdered}
                           type="checkbox"
                           onChange={(e) => {
                               setEditingOrdered(!editingOrdered)
                                setCachedWidget({
                                    ...cachedWidget,
                                    ordered: e.target.checked
                                })
                    }}/> Ordered
                    <br/>
                    Item List
                    <textarea defaultValue={widget.text}
                              rows={10}
                              className="form-control"
                              onChange={(e) => {
                                  setCachedWidget({
                                      ...cachedWidget,
                                      text: e.target.value
                                  })
                    }}></textarea>
                </>
            }
            {
                !editing &&
                <>
                    {
                        editingOrdered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !editingOrdered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </>
    )
}

export default ListWidget;