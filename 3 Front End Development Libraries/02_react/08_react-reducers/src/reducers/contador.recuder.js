import {TYPES} from "../actions/contador.actions"
export const contadorInitialState = {count: 0};

export const contadorInit = (initialState) => {
  return {
    count: initialState.count +  100
  }
}

export function contadorReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return {count: state.count + 1};
    case TYPES.DECREMENT:
      return {count: state.count -1};
    case TYPES.RESET:
      return contadorInitialState;
    case TYPES.INCREMENT_5:
      return {count: state.count + action.payload}
    case TYPES.DECREMENT_5:
      return {count: state.count - action.payload}
    default:
      return state;
  }
}