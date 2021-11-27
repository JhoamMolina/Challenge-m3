import * as ActionsTypes from './ActionsTypes'

export const Pictures  = (state = {
        isLoading: true,
        errMess: null,
        pictures: []
}, action) => {
    switch (action.type) {
        case ActionsTypes.ADD_PICTURES:
            return {...state, isLoading: false, errMess: null, pictures: action.payload}
        
        default: 
            return state;
    }
};