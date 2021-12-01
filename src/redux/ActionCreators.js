import *  as ActionTypes from './ActionsTypes';
import {baseUrl} from '../shared/baseUrl';


export const fetchPictures = () => async (dispatch) => {
    
    const response = await fetch(baseUrl + 'products');
    const pictures = await response.json();
    dispatch(addPictures(pictures));         

}

export const addPictures = (pictures) => ({
    type: ActionTypes.ADD_PICTURES,
    payload: pictures
})

export const addToBasket = (basket) => ({
    type: ActionTypes.ADD_TO_BASKET,
    payload: basket
})

export const getMorePictures = () => async (dispatch) => {
    const response = await fetch(baseUrl + 'products');
    const pictures = await response.json();
    dispatch(morePictures(pictures));
    
}

export const morePictures = (pictures) => ({
    type: ActionTypes.MORE_PICTURES,
    payload: pictures
})