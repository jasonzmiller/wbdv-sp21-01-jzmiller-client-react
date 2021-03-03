import React from 'react';
import './course-styling.css';

const CourseNavbar = () => {
    return (
        <div className="webb-sticky-top">
            <div className="row">

                <div className="col-1">
                    <i className="fa fa-bars fa-2x webb-color-lightskyblue"></i>
                </div>

                <div className="col-2 d-none d-lg-block">
                    <span className="webb-whitespace-nowrap">
                        <h5>Course Manager</h5>
                    </span>
                </div>

                <div className="col-8">
                    <input className="form-control"/>
                </div>

                <div className="col-1">
                    <i className="fa fa-plus-circle fa-2x webb-color-lightskyblue fa-pull-right"></i>
                </div>
            </div>
        </div>
    )
}

export default CourseNavbar