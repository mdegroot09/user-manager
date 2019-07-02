import {ActionEx, UserActionTypes} from './user.actions';

export const initialState = [];

export function UserReducer(state = initialState, action: ActionEx) {
  console.log('state:', state, 'action:', action)
  switch (action.type) {
    case UserActionTypes.Add:
      return [...state, action.payload];
    case UserActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case UserActionTypes.Update:
      return [
        // ...state.slice()
      ]
    default:
      return state;
  }
}