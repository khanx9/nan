import { Action } from "@ngrx/store";
import { ActionTypes } from "../types";

export class CHANGE_LANGUAGE implements Action {
    readonly type = ActionTypes.CHANGE_LANGUAGE;
    public payload: any;
    // tslint:disable-next-line: variable-name
    constructor(_payload: any) {
      this.payload = _payload;
    }
  }