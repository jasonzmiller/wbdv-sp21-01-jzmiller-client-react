const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    state.widgets,
                    action.widget
                ]
            }

        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }

        case "UPDATE_WIDGET":
            return {

            }
        case "DELETE_WIDGET":
        default:
            return state
    }
}

export default widgetReducer