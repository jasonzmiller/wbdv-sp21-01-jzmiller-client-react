import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createStore } from 'redux';
import { connect , Provider } from 'react-redux';
import courseReducer from '../reducers/course-reducer';
import courseService from '../services/course-service';

const store = createStore(courseReducer)

const CourseList = (
    {
        courses=[],
        findAllCourses
    }
) => {

    useEffect(() => {
        findAllCourses()
    })

    return(
        <Provider store={store}>
            <div>
                <h1>hello</h1>
                {JSON.stringify(courses)}
            </div>
        </Provider>
    )
}

const stpm = ( state ) => ({
    courses: state.courseReducer.courses
});

const dtpm = ( dispatch ) => ({
    findAllCourses: () => {
        courseService.findAllCourses
            .then(courses => dispatch({
                type: "FIND_ALL_COURSES",
                courses
            }))
    }
});

export default connect ( stpm , dtpm ) ( CourseList )