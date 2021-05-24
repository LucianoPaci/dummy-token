import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers"
import rootSaga from "./sagas"

export default function configureStore(initialState: any) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, initialState, composedEnhancers)

  sagaMiddleware.run(rootSaga)

  return store
}
