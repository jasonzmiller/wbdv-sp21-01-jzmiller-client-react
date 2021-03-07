import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../services/lesson-service"

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLessonForModule
    }) => {

    const {layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])

    return (
        <div>
            <h2>Lessons {courseId} {moduleId}</h2>
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <li className="nav-items">
                            <EditableItem to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                          item={lesson}/>
                        </li>)
                }
                <li>
                    <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>
    )}

const stpm = (state) => ({
        lessons: state.lessonReducer.lessons
    })

const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },

    createLessonForModule: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService.createLessonsForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    }
})


export default connect(stpm, dtpm)(LessonTabs)