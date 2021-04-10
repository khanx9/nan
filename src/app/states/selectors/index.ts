import { AppState } from "../models";

export const getLangApp = (state : AppState) => {
    return state.commonReducer.lang;
}

export const getUserId = (state : AppState) => {
    return state.commonReducer.user_id;
}

export const getCommonProps = (state : AppState) => {
    return state.commonReducer;
}

export const getByField = (state : AppState, field : string) => {
    return state.commonReducer[field];
}

export const getUserProfile = (state : AppState) => {
    return state.commonReducer.user_profile;
}