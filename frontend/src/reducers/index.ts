import { combineReducers } from "redux"
import * as ActionTypes from "../actions/actionTypes"

export interface IInitialState {
  requested: boolean
  account: string
  balance: string
  sent: string
  error: object | null
}
const initialState: IInitialState = {
  requested: false,
  account: "",
  balance: "",
  sent: "",
  error: null,
}


export type TAction = {
    type: string
    payload?: any
}

const reducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.REQUEST_ACCOUNT_ACTION:
      return {
        ...state,
        requested: true
      }
    case ActionTypes.GET_BALANCE_ACTION:
      return {
        ...state,
        balance: action.payload,
      }

    case ActionTypes.SEND_COINS_ACTION:
      return {
        ...state,
        sent: action.payload,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  main: reducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
