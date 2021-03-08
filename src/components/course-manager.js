import React from 'react';
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";
import CourseNavbar from "./course-navbar";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

export default class CourseManager extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c => c._id === course._id ? course : c)
            })))
    }

    findCourseById = (course) => {
        courseService.findCourseById(course._id, course)
            .then(() => console.log(course))
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course]
                })))
    }

    addSpecifiedCourse = (newCourse) => {
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course]
                })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState
                        .courses
                        .filter(course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return(
            <div>

                <Route path={["/courses/table", "/courses/grid"]}
                       exact={true}>
                    <CourseNavbar addCourse={this.addCourse}
                                  addSpecifiedCourse={this.addSpecifiedCourse}
                                  courses={this.state.courses}/>
                    <i className="fas fa-3x fa-plus-circle webb-pull-bottom-right-fixed webb-color-red"
                       onClick={() => this.addCourse()}></i>
                </Route>

                <div className="container webb-padding-20px webb-padding-top-65px">
                    <Route path="/courses/table"
                           exact={true}>
                        <CourseTable updateCourse={this.updateCourse}
                                     deleteCourse={this.deleteCourse}
                                     courses={this.state.courses}/>
                    </Route>

                    <Route path="/courses/grid"
                           exact={true}>
                        <CourseGrid updateCourse={this.updateCourse}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses}/>
                    </Route>
                </div>

            </div>
        )
    }

}