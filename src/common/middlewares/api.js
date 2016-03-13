import config from '../config'

import fetch from 'isomorphic-fetch'

export const CALL_API = Symbol('CALL_API')
export const GET = Symbol('GET')
export const POST = Symbol('POST')
export const PUT = Symbol('PUT')
export const DELETE = Symbol('DELETE')


export default store => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  function actionWith(data) {
    const finalAction = { ...action, ...data }
    delete finalAction[CALL_API]
    return finalAction
  }

  const { types, endpoint, method } = callAPI
  const [ requestType, successType, failureType ] = types

  next(actionWith({
    type: requestType
  }))

  return fetch(endpoint, {

  })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      if (__CLIENT__) {
        return next(actionWith({
          type: successType,
          data: json.data,
          shouldFetch: true,
        }))
      } else {
        return next(actionWith({
          type: successType,
          data: json.data,
          shouldFetch: false,
        }))
      }
    })
    .catch((err) => {
      return next({
        type: failureType,
        error: 'Error in fetch' + err
      })
    })
}
