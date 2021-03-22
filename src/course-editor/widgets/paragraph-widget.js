import React, {useState} from 'react'

const ParagraphWidget = (
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
                    <textarea className="form-control"
                              defaultValue={widget.text}
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
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget