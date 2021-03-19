import React, {useEffect} from 'react';
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from "../services/topic-service"

const TopicPills = (
    {
        topics=[],
        findTopicsForLesson,
        createTopic,
        updateTopic,
        deleteTopic
    }
) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])

    return (
        <div className="webb-padding-35px">
            <ul class="nav nav-pills nav-fill">
                {
                    topics.map(topic =>
                        <li key={topic._id}>
                            <EditableItem to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                          updateItem={updateTopic}
                                          deleteItem={deleteTopic}
                                          item={topic}
                                          active={topic._id === topicId ? true : false}
                                          paddingLeft={true}/>
                        </li>)
                }
                {
                lessonId !== "undefined" && typeof lessonId !== "undefined" &&
                <li className="nav-item">
                    <ul>
                        <i onClick={() => createTopic(lessonId)}
                           className="fas fa-2x fa-plus webb-color-dodgerblue webb-position-fixed-right-40px"></i>
                    </ul>
                </li>
                }
            </ul>
        </div>
    )

}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics
            }))
    },

    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: "new topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },

    updateTopic: (topic) => {
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            }))
    },

    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete
            }))
    }
})

export default connect(stpm, dtpm)(TopicPills)