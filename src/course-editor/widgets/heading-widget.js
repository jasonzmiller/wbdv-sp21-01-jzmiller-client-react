import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import widgetService from "../../services/widget-service";

const HeadingWidget = (
    {
        widget,
        updateWidget,
        editing,
        text=widget.text,
        size=widget.size
    }) => {

    const [newText, setNewText] = useState(text);

    const [newSize, setNewSize] = useState(size)

    const updateTextOfWidget = () => {
        const updatedWidget = {
            ...widget,
            text: newText
        }
        console.log(updatedWidget)
        updateWidget(updatedWidget)
    }

    useEffect(() => {

    }, [widget])


    return(
        <>
            {
                editing &&
                <>
                    {/*<i className="fas fa-2x fa-check float-right"*/}
                    {/*   onClick={() => {*/}
                    {/*       updateWidget({*/}
                    {/*           ...widget,*/}
                    {/*           text: newText*/}
                    {/*       })*/}
                    {/*   }}></i>*/}
                    <select className="form-control"
                            value={newSize}
                            onChange={(e) => {
                                setNewSize(e.target.value)
                                updateWidget({
                                        ...widget,
                                        size: newSize
                                    })
                            }}>
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                    <input className="form-control"
                           type="text"
                           defaultValue={widget.text}
                           onChange={(event) => {
                               setNewText(event.target.value)
                               console.log(widget)
                           }}/>
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
}

const stpm = ( state ) => (
    {
        widgets: state.widgetReducer.widgets
    }
)

const dtpm = ( dispatch ) => ({
    findWidgetsForTopic: (tid) => {
        widgetService.findWidgetsForTopic(tid)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets
            }))
    },

    updateWidget: (widget) => {
        console.log("1 "+ widget)
        widgetService.updateWidget(widget.id, widget)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                widget
            }))
    }
})

export default connect( stpm, dtpm ) ( HeadingWidget )