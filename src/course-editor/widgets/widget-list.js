import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import widgetService from "../../services/widget-service.js";

const WidgetList = (
    {
        createWidget,
        findWidgetsForTopic,
        findAllWidgets,
        findWidgetById,
        updateWidget,
        deleteWidget
    }) => {
    // TODO: move state management to widget-reducer
    const [widgets, setWidgets] = useState([]);

    const [editingWidget, setEditingWidget] = useState({});

    const {topicId} = useParams();

    useEffect(() => {
        // TODO: move server communication to widget-service
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])

    const createWidgetForTopic = () => {
        // TODO: move server communication to widget-service
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: "POST",
            body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
            headers: {
                'content-type' : 'application/json'
            }
        })
            .then(response => response.json())
            .then(widget => {
                setWidgets(widgets => ([...widgets, widget]))
            })
    }

    const deleteWidget = (wid) =>
        fetch(`http://localhost:8080/api/widgets/{wid}`, {
            method: "DELETE"
        })
            .then(status => {
                setWidgets((widgets) => widgets.filter(widget => widget.id !== wid))
            })

    const updateWidget = (wid, widget) =>
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: "PUT",
            body: JSON.stringify({widget}),
            headers: {
                'content-type' : 'application/json'
            }
        })
            .then(status => {
                setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
                setEditingWidget({})
            })

    return (
        <div>
            <i onClick={createWidgetForTopic} className="fas fa-plus fa-2x float-right"></i>
            <h2>
                Widget List ({widgets.length}) {editingWidget.id}
            </h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                    <>
                                        <i onClick={() => {
                                            updateWidget(widget.id, editingWidget)
                                        }} className="fas fa-2x fa-check float-right"></i>
                                        <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                                    </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                    <>
                                        <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                                    </>
                            }
                            {
                                widget.type === "HEADING" &&
                                    <HeadingWidget widget={widget}
                                                   editing={editingWidget.id === widget.id}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                    <ParagraphWidget widget={widget}
                                                     editing={editingWidget.id === widget.id}/>
                            }
                        </li>
                    )}
            </ul>
            {JSON.stringify(widgets)}

        </div>
    )
}

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

    findWidgetsForTopic,

    findAllWidgets,

    findWidgetById,

    updateWidget,

    deleteWidget
})

export default connect( stpm, dtpm ) ( WidgetList );