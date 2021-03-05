import React from 'react';
import {connect} from 'react-redux';
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";

const ModuleList = (
    {
        to="/go/somewhere/else",
        myModules = [],
        createModule = () => alert("create module"),
        deleteModule = (item) => alert("delete " + item._id),
        updateModule = (item) => alert("update module" + item._id)
    }) => {
    const {courseId} = useParams();
    return (
        <div>
            <h2>Modules {myModules.length} {courseId}</h2>
                <ul className="list-group">
                    {
                        myModules.map(module =>
                            <li className="list-group-item">
                                <EditableItem to={`/courses/editor/jkh/kjh`}
                                              updateItem={updateModule}
                                              deleteItem={deleteModule}
                                              item={module}/>
                            </li>
                        )
                    }
                    <li className="list-group-item">
                        <i onClick={createModule} className="fas fa-plus fa-2x"></i>
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
        createModule: () => dispatch({
            type: "CREATE_MODULE"
        }),

        deleteModule: (item) => dispatch({
            type: "DELETE_MODULE",
            moduleToDelete: item
        }),

        updateModule: (module) => dispatch({
            type: "UPDATE_MODULE",
            module
        })
    }
}

export default connect(stpm, dtpm) (ModuleList)