import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ImageWidget from "./image-widget";
import ListWidget from "./list-widget";
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
            <i onClick={() => {
                createWidget(topicId, {
                    type: "HEADING",
                    size: 5,
                    text: "New Widget",
                    ordered: "false",
                    width: 500,
                    height: 400,
                    url: "https://thehappypuppysite.com/wp-content/uploads/2019/07/baby-labrador-long.jpg"
                })
            }}
               className="fas fa-plus fa-2x float-right"></i>
            <h2>
                Widget List ({widgets.length})
            </h2>
            <ul className="list-group">
                {
                widgets &&    widgets.map(widget =>
                        <li className="list-group-item"
                            key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <select className="form-control"
                                            defaultValue={widget.type}
                                            onChange={(e) => {
                                                updateWidget(widget.id, {
                                                        ...widget,
                                                        type: e.target.value})
                                                setEditingWidget({})}}>
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="VIDEO">Video</option>
                                        <option value="IMAGE">Image</option>
                                        <option value="LINK">Link</option>
                                        <option value="LIST">List</option>
                                        <option value="HTML">HTML</option>
                                    </select>
                                </>

                            }
                            {
                                editingWidget.id !== widget.id &&
                                <>
                                    <i className="fas fa-2x fa-cog float-right"
                                       onClick={() => setEditingWidget(widget)}></i>
                                </>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget widget={widget}
                                               updateWidget={updateWidget}
                                               deleteWidget={deleteWidget}
                                               editing={editingWidget.id === widget.id}
                                               setEditingWidget={setEditingWidget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget widget={widget}
                                                 updateWidget={updateWidget}
                                                 deleteWidget={deleteWidget}
                                                 editing={editingWidget.id === widget.id}
                                                 setEditingWidget={setEditingWidget}/>
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget widget={widget}
                                             updateWidget={updateWidget}
                                             deleteWidget={deleteWidget}
                                             editing={editingWidget.id === widget.id}
                                             setEditingWidget={setEditingWidget}/>
                            }
                            {
                                widget.type === "LIST" &&
                                    <ListWidget widget={widget}
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}
                                                editing={editingWidget.id === widget.id}
                                                setEditingWidget={setEditingWidget}/>
                            }
                        </li>
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

export default connect( stpm, dtpm ) ( WidgetList )