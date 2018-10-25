import * as Constants from '../../Actions/ActionTypes';

const initialState = {
    DisplayText: '',
}

const HomeReducer = (state = initialState, action) => {
    const newState = state;
    switch(action.type) {
        case Constants.UPDATE_TEXT_HOME: {
            return Object.assign({}, state, {
                DisplayText: action.payload
            })
        }
        default: return state;
    }
}

export default HomeReducer;