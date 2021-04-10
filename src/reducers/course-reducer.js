const initialState = {
    courses: []
}

const courseReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case "FIND_ALL_COURSES":
            return {
                ...state,
                courses: action.courses
            }
    }
}

export default courseReducer