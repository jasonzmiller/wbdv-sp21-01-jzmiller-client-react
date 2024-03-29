import React, {useState} from 'react'

const HeadingWidget = (
    {
        widget,
        updateWidget,
        deleteWidget,
        editing,
        setEditingWidget
    }) => {

    const [cachedWidget, setCachedWidget] = useState(widget);

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
                    <select className="form-control"
                            defaultValue={widget.size}
                            onChange={(e) => {
                                setCachedWidget({
                                    ...cachedWidget,
                                    size: e.target.value
                                })
                            }}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                        <option value="5">Heading 5</option>
                        <option value="6">Heading 6</option>
                    </select>
                    <input className="form-control"
                           type="text"
                           defaultValue={widget.text}
                           onChange={(e) =>
                               setCachedWidget({
                                   ...cachedWidget,
                                   text: e.target.value
                           })}/>
                </>
            }
            {
                !editing &&
                <>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
        </>
    )
};

export default HeadingWidget