import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { ethers } from "ethers"
import * as ActionTypes from "../actions/actionTypes"

// Request Account

const requestAccount = async () =>
  (window as any).ethereum.request({
    method: "eth_requestAccounts",
  })

function* requestAccountSaga(): any {
  try {
    const [account] = yield call(requestAccount)
    yield put({ type: ActionTypes.REQUEST_ACCOUNT_ACTION, payload: account })
  } catch (error) {
    console.log(error)
  }
}

function* getBalanceSaga({ payload }: any): any {
  const { token, abi } = payload
  if (typeof (window as any).ethereum !== "undefined") {
    try {
      const [account] = yield call(requestAccount)
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      )
      const contract = new ethers.Contract(token, abi, provider)
      const balance = yield contract.balanceOf(account)
      yield put({
        type: ActionTypes.GET_BALANCE_ACTION,
        payload: balance.toString(),
      })
    } catch (error) {
    }
  }
}

export function* sendCoinsSaga({ payload }: any): any {
  
  const { tokenAddress, abi, to: userAccount, amount } = payload

  try {
    if (typeof (window as any).ethereum !== "undefined") {
      yield call(requestAccount)
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      )
      const signer = provider.getSigner()
      const contract = new ethers.Contract(tokenAddress, abi, signer)
      const transaction = yield contract.transfer(userAccount, amount)
      yield transaction.wait()
      yield put({
        type: ActionTypes.SEND_COINS_ACTION,
        payload: "Sent!",
      })
    }
  } catch (error) {
    console.log("Error - sendCoinsSaga", error)
  }
  console.groupEnd()
}
export function* watchRequestAccountSaga() {
  yield takeEvery(ActionTypes.REQUEST_ACCOUNT_SAGA, requestAccountSaga)
}

export function* watchGetBalanceSaga() {
  yield takeLatest(ActionTypes.GET_BALANCE_SAGA, getBalanceSaga)
}

export function* watchSendCoinsSaga() {
  yield takeEvery(ActionTypes.SEND_COINS_SAGA, sendCoinsSaga)
}
export default function* rootSaga() {
  // Combine sagas with
  yield all([
    call(watchRequestAccountSaga),
    call(watchGetBalanceSaga),
    call(watchSendCoinsSaga),
  ])
}
