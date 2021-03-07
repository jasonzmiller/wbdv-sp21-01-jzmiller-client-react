const initialState = {
    modules: []
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            const newStateCreate = {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
            return newStateCreate

        case "DELETE_MODULE":
            const newStateDelete = {
                modules: state.modules.filter(module => {
                    if (module._id === action.moduleToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newStateDelete

        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(module => {
                    if (module._id === action.module._id) {
                        return action.module
                    } else {
                        return module
                    }
                })
            }

        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }

        default:
            return state
    }
}

export default moduleReducer