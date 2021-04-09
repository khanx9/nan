import { NbComponentStatus } from "@nebular/theme";

export interface CommonState {
    lang?: string;
    user_id?: string;
    app_loading?: boolean;
}

export interface CommonAction {
    type: string;
    payload: CommonState | any;
}


export interface AppState {
    commonReducer: CommonState
}

export interface AppToast {
    title? :string;
    message? :string;
    status? : NbComponentStatus
}