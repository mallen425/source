import {NAV_PAGE} from "../constants/action-types";

const initialState = {
    routeName: ''
};

function rootReducer(state=initialState, action) {
    if (action.type === NAV_PAGE) {
        return Object.assign({}. state, {
            routeName: action.payload
        });
    }
    return state;
};

export default rootReducer;