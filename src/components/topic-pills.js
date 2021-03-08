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

    const {layout, courseId, moduleId, lessonId} = useParams();

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
                        <li>
                            <EditableItem to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                          updateItem={updateTopic}
                                          deleteItem={deleteTopic}
                                          item={topic}/>
                        </li>)
                }
                <li className="nav-item">
                    <i onClick={() => createTopic(lessonId)}
                       className="fas fa-plus"></i>
                </li>
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
    }
})

export default connect(stpm, dtpm)(TopicPills)