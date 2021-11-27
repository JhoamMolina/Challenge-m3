import *  as ActionTypes from './ActionsTypes';
import {baseUrl} from '../shared/baseUrl';


export const fetchPictures = () => async (dispatch) => {
    
    const response = await fetch(baseUrl + 'products');
    const pictures = await response.json();
    const initialPictures = pictures.slice(0, 9);
    dispatch(addPictures(initialPictures));
          

}

export const addPictures = (pictures) => ({
    type: ActionTypes.ADD_PICTURES,
    payload: pictures
})
