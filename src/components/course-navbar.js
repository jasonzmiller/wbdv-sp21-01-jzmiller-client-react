import React, {useState} from 'react';
import './course-styling.css';

const CourseNavbar = (
    {
        addCourse,
        addSpecifiedCourse,
        title=""
    }) => {

    const [newTitle, setNewTitle] = useState(title);

    const createSpecifiedCourse = () => {
        const newCourse = {
            title: newTitle,
            owner: "me",
            lastModified: "today"
        }
        addSpecifiedCourse(newCourse)
    }

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

                <div className="col-7">
                    <input className="form-control"
                           id="formy"
                           type="text"
                           onChange={(event) => setNewTitle(event.target.value)}/>
                </div>

                <div className="col-2">
                    {
                        (newTitle.length == 0) &&
                        <i onClick={() => addCourse()}
                        className="fa fa-plus-circle fa-2x webb-color-lightskyblue"></i>}
                    {
                        (newTitle.length != 0) &&
                        <i onClick={() => {
                            document.getElementById("formy").value = "";
                            createSpecifiedCourse()
                        }}
                        className="fa fa-plus-circle fa-2x webb-color-lightskyblue"></i>}
                </div>
            </div>
        </div>
    )
}

export default CourseNavbar