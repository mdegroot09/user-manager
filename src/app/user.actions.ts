import {Action} from '@ngrx/store';

export enum UserActionTypes {
  Add = '[User Component] Add',
  Remove = '[User Component] Remove',
  Update = '[User Component] Update'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class UserAdd implements ActionEx {
  readonly type = UserActionTypes.Add;
  constructor(public payload: any) {
  }
}

export class UserRemove implements ActionEx {
  readonly type = UserActionTypes.Remove;
  constructor(public payload: any) {
  }
}

export class UserUpdate implements ActionEx {
  readonly type = UserActionTypes.Update;
  constructor(public payload: any){
  }
}