const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }

        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }

        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(lesson => {
                    return lesson._id === action.lesson._id ? action.lesson : lesson
                })
            }

        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => {
                    return lesson._id === action.lessonToDelete._id ? false : true
                })
            }

        default:
            return state
    }
    return state
}

export default lessonReducer