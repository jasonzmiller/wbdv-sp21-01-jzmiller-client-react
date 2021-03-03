import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        updateCourse,
        deleteCourse,
        course
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <tr>
            <td align="left">
                {
                    !editing &&
                    <Link to="/courses/editor">
                        <i className="fa fa-file webb-margin"></i>
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input className="form-control"
                           value={newTitle}
                           onChange={(event) => setNewTitle(event.target.value)}/>
                }
            </td>
            <td className="d-none d-md-table-cell">{course.owner}</td>
            <td className="d-none d-lg-table-cell">{course.lastModified}</td>
            <td>
                <span className="webb-whitespace-nowrap">
                    {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit webb-color-blue webb-margin"></i>}
                    {!editing && <i onClick={() => deleteCourse(course)} className="fas fa-trash webb-margin"></i>}
                    {editing  && <i onClick={() => saveTitle()} className="fas fa-check webb-color-green webb-margin"></i>}
                    {editing  && <i onClick={() => setEditing(false)} className="fas fa-times webb-color-red webb-margin"></i>}
                </span>
            </td>
        </tr>
    )
}

export default CourseRow