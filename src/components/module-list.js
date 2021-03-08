import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../services/module-service"

const ModuleList = (
    {
        to="/go/somewhere/else",
        modules = [],
        findModulesForCourse = (courseId) => console.log(courseId),
        createModule = () => alert("create module"),
        updateModule = (item) => alert("update module" + item._id),
        deleteModule = (item) => alert("delete " + item._id)
    }) => {

    const {layout, courseId} = useParams();

    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])

    return (
        <div>
            <h2>Modules</h2>
                <ul className="list-group">
                    {
                        modules.map(module =>
                            <li className="list-group-item">
                                <EditableItem to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                              updateItem={updateModule}
                                              deleteItem={deleteModule}
                                              item={module}/>
                            </li>
                        )
                    }
                    <li className="list-group-item">
                        <i onClick={() => createModule(courseId)}
                           className="fas fa-plus fa-2x"></i>
                    </li>
                </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        modules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: modules
                }))
        },

        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "new module"})
                .then(actualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: actualModule
                }))
        },

        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),

        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                }))
    }
}

export default connect(stpm, dtpm) (ModuleList)