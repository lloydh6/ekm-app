import * as types from '../ActionTypes';

export const updateHomeText = (e) => ({
    type: types.UPDATE_TEXT_HOME,
    payload: e,
});