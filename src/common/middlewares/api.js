import axios from 'axios'

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPIAction = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPIAction
  const { types } = callAPIAction


}
