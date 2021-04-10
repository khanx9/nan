import { DEFAULT, KEYS } from "src/app/constants";
import { CommonAction, CommonState } from './../models/index';
import { ActionTypes } from './../types/index';
import jwt_decode from 'jwt-decode';


const langStorage = localStorage.lang;


if (!langStorage) {
    localStorage.setItem('lang', DEFAULT.LANG);
}

const userDecode : any = localStorage.getItem(KEYS.ACCESS_TOKEN) ? jwt_decode(localStorage.getItem(KEYS.ACCESS_TOKEN)) : '';
const user = userDecode?.user;

console.log(user)



const initialState: CommonState = {
    lang: langStorage || DEFAULT.LANG,
    user_id: user?.id || '',
    app_loading: false,
    user_profile: {}
}

export const CommonReducer = (state = initialState, action: CommonAction): CommonState => {
    switch (action.type) {
        // CODING case for getting state here 😎👌👌\
        case ActionTypes.STORE_USER_PROFILE:
            return {
                ...state,
                user_profile: action.payload
            }
        case ActionTypes.APP_LOADING:
            return {
                ...state,
                app_loading: action.payload
            }
        case ActionTypes.CHANGE_LANGUAGE:
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state;
    }
}