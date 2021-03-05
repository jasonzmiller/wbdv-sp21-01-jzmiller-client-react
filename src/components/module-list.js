import React from 'react';
import {connect} from 'react-redux';
import EditableItem from "./editable-item";

const ModuleList = (
    {
        myModules = [],
        createModule = () => alert("create module"),
        deleteModule = (item) => alert("delete " + item._id),
        updateModule = (item) => alert("update module" + item._id)
    }) =>
    <div>
        <h2>
            Modules {myModules.length}
            <ul className="list-group">
                {
                    myModules.map(module =>
                    <li className="list-group-item">
                        <EditableItem updateItem={updateModule}
                                      deleteItem={deleteModule}
                                      item={module}/>
                    </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={createModule} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </h2>
    </div>

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