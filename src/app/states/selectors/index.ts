import { AppState } from "../models";

export const getLangApp = (state : AppState) => {
    return state.commonReducer.lang;
}

export const getByField = (state : AppState, field : string) => {
    return state.commonReducer[field];
}