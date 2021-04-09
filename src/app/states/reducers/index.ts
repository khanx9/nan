import { DEFAULT } from "src/app/constants";
import { CommonAction, CommonState } from './../models/index';
import { ActionTypes } from './../types/index';


const langStorage = localStorage.lang;


if (!langStorage) {
  localStorage.setItem('lang', DEFAULT.LANG);
}

const initialState : CommonState = {
    lang : DEFAULT.LANG,
    user_id : '',
    app_loading : false
}

export const CommonReducer = (state = initialState,action : CommonAction) : CommonState => {
    switch(action.type){
        // CODING case for getting state here 😎👌👌\
        case ActionTypes.APP_LOADING:
            return {
                ...state,
                app_loading : action.payload
            }
        case ActionTypes.CHANGE_LANGUAGE :
            return {
                ...state,
                lang : action.payload
            } 
        default :
        return state;
    }
}