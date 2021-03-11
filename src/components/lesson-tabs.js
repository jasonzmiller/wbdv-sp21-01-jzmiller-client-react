import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../services/lesson-service"

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLesson,
        updateLesson,
        deleteLesson
    }) => {

    const {layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])

    return (
        <div>
            <h2>Lessons</h2>
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                          updateItem={updateLesson}
                                          deleteItem={deleteLesson}
                                          item={lesson}
                                          active={lesson._id === lessonId ? true : false}
                                          paddingLeft={true}/>
                        </li>)
                }
                {
                    moduleId !== "undefined" && typeof moduleId !== "undefined" &&
                    <li className="nav-item">
                        <ul>
                            <i onClick={() => createLesson(moduleId)}
                               className="fas fa-2x fa-plus webb-color-dodgerblue webb-position-fixed-right-40px"></i>
                        </ul>
                    </li>
                }
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
                type: "FIND_LESSONS_FOR_MODULE",
                lessons
            }))
    },

    createLesson: (moduleId) => {
        lessonService.createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },

    updateLesson: (lesson) => {
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            }))
    },

    deleteLesson: (lesson) => {
        lessonService.deleteLesson(lesson._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: lesson
            }))
    }
})


export default connect(stpm, dtpm)(LessonTabs)