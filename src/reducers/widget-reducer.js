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
                widgets: state.widgets.map(widget => {
                    return widget.id === action.widget.id ? action.widget : widget
                })
            }

        case "DELETE_WIDGET":
            return {
                topics: state.topics.filter(w => {
                    return w.id === action.widget.id ? false : true
                })
            }

        default:
            return state
    }
}

export default widgetReducer