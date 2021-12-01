import * as ActionsTypes from './ActionsTypes'

export const Pictures  = (state = {
        pictures: [],
        loadedImages: 9
}, action) => {
    switch (action.type) {
        case ActionsTypes.ADD_PICTURES:
            var photos = action.payload
            return {...state, pictures: photos.slice(0, 9)}
        case ActionsTypes.MORE_PICTURES:
            var twoMorePhotos = action.payload;
            return {...state, pictures: state.pictures.concat(twoMorePhotos.slice(state.loadedImages,state.loadedImages + 3)), loadedImages: state.loadedImages + 3}    
        default: 
            return state;
    }
};