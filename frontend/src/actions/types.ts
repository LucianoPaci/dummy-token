
import {
    REQUEST_ACCOUNT_SAGA,
    GET_BALANCE_SAGA,
    SEND_COINS_SAGA,
  } from "./actionTypes"

export type TCommonActionPayload = {
    token: string
    abi: any
}

export type TSendCoinsAction = TCommonActionPayload & {
    to: string
    amount: string | number
}

// export type TGetBalanceActionPayload = {
//     balance: string
// }

// export type TSendCoinsActionPayload = {
//     sent: string
// }

export interface IRequestAccountSuccess  {
    type: typeof REQUEST_ACCOUNT_SAGA
}

export interface ISendCoinsSuccess {
    type: typeof SEND_COINS_SAGA
    payload: TSendCoinsAction
}

export interface IGetBalanceSuccess { 
    type: typeof GET_BALANCE_SAGA
    payload :TCommonActionPayload
}


// export type TActions = IRequestAccountSuccess | ISendCoinsSuccess | IGetBalanceSuccess