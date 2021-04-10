
import { NbGlobalLogicalPosition, NbToastrService } from "@nebular/theme";
import { Action } from "@ngrx/store";
import { STATUS_ICON } from "src/app/constants";
import { AppToast } from "../models";
import { ActionTypes } from "../types";

export class CHANGE_LANGUAGE implements Action {
  readonly type = ActionTypes.CHANGE_LANGUAGE;
  public payload: any;
  // tslint:disable-next-line: variable-name
  constructor(_payload: any) {
    this.payload = _payload;
  }
}

export class CHANGE_APP_LOADING implements Action {
  readonly type = ActionTypes.APP_LOADING;
  public payload: any;
  // tslint:disable-next-line: variable-name
  constructor(_payload: any) {
    this.payload = _payload;
  }
}


export class SHOW_TOAST implements Action {
  readonly type = ActionTypes.SHOW_TOAST;
  public payload: any;
  // tslint:disable-next-line: variable-name
  constructor(_payload: AppToast, toatsrService: NbToastrService) {
    toatsrService.show(_payload.message, _payload.title, { 
      status: _payload.status, position: NbGlobalLogicalPosition.BOTTOM_END, icon: STATUS_ICON[_payload.status] })
  }
}

export class STORE_USER_PROFILE implements Action {
  readonly type = ActionTypes.STORE_USER_PROFILE;
  public payload: any;
  // tslint:disable-next-line: variable-name
  constructor(_payload: any) {
    this.payload = _payload;
  }
}