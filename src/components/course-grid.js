import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div>
        <div className="row">
            <div className="col-4">
                <h3>Recent Documents</h3>
            </div>
            <div className="col-4">
                <h3>Owned by me</h3>
            </div>
            <div className="col-4 text-right">
                <span className="webb-whitespace-nowrap">
                    <i className="fas fa-folder webb-margin"></i>
                    <i className="fas fa-sort-alpha-up-alt webb-margin"></i>
                    <Link to="/courses/table">
                        <i className="fas fa-list webb-color-blue  webb-margin"></i>
                    </Link>
                </span>
            </div>
        </div>
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard key={course._id}
                                course={course}
                                title={course.title}
                                updateCourse={updateCourse}
                                deleteCourse={deleteCourse}/>
                )
            }
        </div>
    </div>


export default CourseGrid