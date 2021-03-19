import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import widgetService from "../../services/widget-service";

const WidgetList = (
    {
        widgets=[],
        createWidget,
        findWidgetsForTopic,
        updateWidget,
        deleteWidget
    }) => {

    const [editingWidget, setEditingWidget] = useState({});

    const {topicId} = useParams();

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])

    return (
        <div>
            <i onClick={() => createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})}
               className="fas fa-plus fa-2x float-right"></i>
            <h2>
                Widget List ({widgets.length})
            </h2>
            <ul className="list-group">
                {
                    widgets.map(widget => {
                        console.log(widget)
                        return (
                            <li>
                                {
                                    widget.type === "HEADING" &&
                                    <HeadingWidget widget={widget}
                                        /*editing={editingWidget.id === widget.id}*//>
                                }
                                {
                                    widget.type === "PARAGRAPH" &&
                                    <ParagraphWidget widget={widget}
                                        /*editing={editingWidget.id === widget.id}*//>
                                }
                            </li>
                            /*<li className="list-group-item"> {/!*TODO key*!/}
                                <select className="form-control">
                                    <option value="heading">Heading</option>
                                    <option value="paragraph">Paragraph</option>
                                    <option value="video">Video</option>
                                    <option value="image">Image</option>
                                    <option value="link">Link</option>
                                    <option value="list">List</option>
                                    <option value="HTML">HTML</option>
                                </select>*/

                            /*</li>*/
                        )
                        }
                    )
                }
            </ul>
        </div>
    )
};

const stpm = ( state ) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = ( dispatch ) => ({
    createWidget: (tid, widget) => {
        widgetService.createWidget(tid, widget)
            .then(w => dispatch({
                type: "CREATE_WIDGET",
                w
            }))
    },

    findWidgetsForTopic: (tid) => {
        widgetService.findWidgetsForTopic(tid)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets
            }))
    },

    updateWidget: (wid, widget) => {
        widgetService.updateWidget(wid, widget)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                widget
            }))
    },

    deleteWidget: (wid) => {
        widgetService.deleteWidget(wid)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                wid
            }))
    }
})

export default connect( stpm, dtpm ) ( WidgetList );



// {
//     editingWidget.id === widget.id &&
//     <>
//         <i onClick={() => {
//             updateWidget(widget.id, editingWidget)
//         }} className="fas fa-2x fa-check float-right"></i>
//         <i onClick={() => deleteWidget(widget.id)}
//            className="fas fa-2x fa-trash float-right"></i>
//     </>
// }
// {
//     editingWidget.id !== widget.id &&
//     <>
//         <i onClick={() => setEditingWidget(widget)}
//            className="fas fa-2x fa-cog float-right"></i>
//     </>
// }
// {
//     widget.type === "HEADING" &&
//     <HeadingWidget widget={widget}
//                    editing={editingWidget.id === widget.id}/>
// }
// {
//     widget.type === "PARAGRAPH" &&
//     <ParagraphWidget widget={widget}
//                      editing={editingWidget.id === widget.id}/>
// }




// TODO: move state management to widget-reducer
// const [widgets, setWidgets] = useState([]);

// const createWidgetForTopic = () => {
//     // TODO: move server communication to widget-service
//     fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
//         method: "POST",
//         body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
//         headers: {
//             'content-type' : 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(widget => {
//             setWidgets(widgets => ([...widgets, widget]))
//         })
// }
//
// const deleteWidget = (wid) =>
//     fetch(`http://localhost:8080/api/widgets/{wid}`, {
//         method: "DELETE"
//     })
//         .then(status => {
//             setWidgets((widgets) => widgets.filter(widget => widget.id !== wid))
//         })
//
// const updateWidget = (wid, widget) =>
//     fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
//         method: "PUT",
//         body: JSON.stringify({widget}),
//         headers: {
//             'content-type' : 'application/json'
//         }
//     })
//         .then(status => {
//             setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
//             setEditingWidget({})
//         })