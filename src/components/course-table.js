import React from 'react';
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th className="webb-dashtable-title">Title</th>
                        <th className="webb-dashtable-ownedby d-none d-md-table-cell">Owned by</th>
                        <th className="webb-dashtable-lastmodified d-none d-lg-table-cell">Last modified by me</th>
                        <th className="webb-dashtable-trash">
                            <span className="webb-whitespace-nowrap">
                                <i className="fas fa-folder webb-margin"></i>
                                <i className="fas fa-sort-alpha-up-alt webb-margin"></i>
                                <Link to="/courses/grid">
                                    <i className="fas fa-th webb-color-blue webb-margin"></i>
                                </Link>
                            </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRow key={course._id}
                                       updateCourse={this.props.updateCourse}
                                       deleteCourse={this.props.deleteCourse}
                                       course={course}
                                       title={course.title}
                                       owner={course.owner}
                                       lastModified={course.lastModified}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}