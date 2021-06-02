import {
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM
} from "../actions/types";

const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            const streamsObj = action.payload.reduce((acc, stream) => {
                acc[stream.id] = stream
                return acc
            }, {})
            return { ...state, ...streamsObj }
        case DELETE_STREAM:
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default streamReducer;