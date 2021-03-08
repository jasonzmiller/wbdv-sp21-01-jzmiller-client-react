import React, {useEffect} from 'react';
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from "../services/topic-service"

const TopicPills = (
    {
        topics=[],
        findTopicsForLesson,
        createTopic
    }
) => {

    const {layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])

}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: "new topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    }
})

export default connect(stpm, dtpm)(TopicPills)