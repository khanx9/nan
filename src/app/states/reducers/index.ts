import { DEFAULT } from "src/app/constants";
import { CommonAction, CommonState } from './../models/index';
import { ActionTypes } from './../types/index';


const langStorage = localStorage.lang;


if (!langStorage) {
  localStorage.setItem('lang', DEFAULT.LANG);
}

const initialState : CommonState = {
    lang : DEFAULT.LANG
}

export const CommonReducer = (state = initialState,action : CommonAction) : CommonState => {
    switch(action.type){
        // CODING case for getting state here 😎👌👌\
        case ActionTypes.CHANGE_LANGUAGE :
            return {
                ...state,
                lang : action.payload
            } 
        default :
        return state;
    }
}