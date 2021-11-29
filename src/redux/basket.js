import * as ActionsTypes from './ActionsTypes'

export const Basket  = (state = {
        basket: []
}, action) => {
    switch (action.type) {
        case ActionsTypes.ADD_TO_BASKET:
            var product = action.payload
            return {...state, basket: state.basket.concat(product)}
        default: 
            return state;
    }
};