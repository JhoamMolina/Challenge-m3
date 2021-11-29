import * as ActionsTypes from './ActionsTypes'

export const Pictures  = (state = {
        pictures: []
}, action) => {
    switch (action.type) {
        case ActionsTypes.ADD_PICTURES:
            return {...state, pictures: action.payload}
        default: 
            return state;
    }
};