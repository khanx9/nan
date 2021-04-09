export interface CommonState {
    lang? :string;
}

export interface CommonAction {
    type: string;
    payload: CommonState | any;
  } 


  export interface AppState {
      commonReducer : CommonState
  }