import React, {useState} from 'react'

const ImageWidget = (
    {
        widget,
        updateWidget,
        deleteWidget,
        editing,
        setEditingWidget
    }
) => {

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

                    <label for="url" className="col-form-label">
                        Image URL
                    </label>
                    <input className="form-control"
                           id="url"
                           defaultValue={widget.url}
                           onChange={(e) => {
                               setCachedWidget({
                                   ...cachedWidget,
                                   url: e.target.value
                               })
                           }}/>

                    <label for="height" className="col-form-label">
                        Image Height
                    </label>
                    <input className="form-control"
                           id="height"
                           defaultValue={widget.height}
                           onChange={(e) => {
                              setCachedWidget({
                                  ...cachedWidget,
                                  height: e.target.value
                              })
                          }}/>

                    <label for="width" className="col-form-label">
                        Image Width
                    </label>
                    <input className="form-control"
                           id="width"
                           defaultValue={widget.width}
                           onChange={(e) => {
                               setCachedWidget({
                                   ...cachedWidget,
                                   width: e.target.value
                               })
                           }}/>
                </>
            }
            {
                !editing &&
                <>
                    <img width={widget.width}
                         height={widget.height}
                         src={widget.url}/>
                </>
            }
        </>
    )
}

export default ImageWidget