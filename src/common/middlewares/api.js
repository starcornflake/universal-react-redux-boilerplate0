import config from '../config'

import fetch from 'isomorphic-fetch'

export const CALL_API = 'CALL_API'
export const GET = 'GET'
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


// Client + server:
// 1. Get csrf from cookie and set it to X-CSRF-TOKEN header
// 2. Simply forward the cookie to the API calls
// Note: If any of these API calls fail due to auth error, redirect user to login page


  return fetch(endpoint, {
    method,
    body: JSON.stringify({
      name: 'bk'
    })
  })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      if (__CLIENT__) {
        // By default, it should always fetch on componentDidMount.
        // The only time we ever update shouldFetch back to true is when
        // we try to render it again on client.
        return next(actionWith({
          type: successType,
          data: json.data,
        }))
      } else {
        // This server side doesn't matter for non-GET methods, since we won't
        // POST or DELETE anything at this stage.
        // Also, this is the ONLY place where shouldFetch is false.
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
