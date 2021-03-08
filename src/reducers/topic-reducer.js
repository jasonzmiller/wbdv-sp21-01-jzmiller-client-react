const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }

        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }

        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(topic => {
                    return topic._id === action.topic._id ? action.topic : topic
                })
            }

        case "DELETE_TOPIC":
            return {
                topics: state.topics.filter(topic => {
                    return topic._id === action.topicToDelete._id ? false : true
                })
            }

        default:
            return state
    }
    return state
}

export default topicReducer