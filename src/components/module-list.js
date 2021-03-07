import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../services/module-service"

const ModuleList = (
    {
        to="/go/somewhere/else",
        myModules = [],
        createModule = () => alert("create module"),
        deleteModule = (item) => alert("delete " + item._id),
        updateModule = (item) => alert("update module" + item._id),
        findModulesForCourse = (courseId) => console.log(courseId)
    }) => {

    const {layout, courseId, moduleId} = useParams();

    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])

    return (
        <div>
            <h2>Modules {myModules.length}</h2>
                <ul>
                    <li>layout: {layout}</li>
                    <li>courseId: {courseId}</li>
                    <li>moduleId: {moduleId}</li>
                </ul>

                <ul className="list-group">
                    {
                        myModules.map(module =>
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
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "new module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },

        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),

        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),

        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
        }
    }
}

export default connect(stpm, dtpm) (ModuleList)