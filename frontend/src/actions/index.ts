import {
  REQUEST_ACCOUNT_SAGA,
  GET_BALANCE_SAGA,
  SEND_COINS_SAGA,
} from "./actionTypes"
import {
  IRequestAccountSuccess,
  IGetBalanceSuccess,
  TCommonActionPayload,
  ISendCoinsSuccess,
  TSendCoinsAction
} from "./types"

export const requestAccount = (): IRequestAccountSuccess => ({
  type: REQUEST_ACCOUNT_SAGA,
})

export const getBalance = (
  payload: TCommonActionPayload
): IGetBalanceSuccess => {
  return {
    type: GET_BALANCE_SAGA,
    payload
  }
}

export const sendCoins = (
  payload: TSendCoinsAction
): ISendCoinsSuccess => {
  return {
    type: SEND_COINS_SAGA,
    payload,
  }
}
