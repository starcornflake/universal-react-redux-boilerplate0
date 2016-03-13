import config from '../config'

import fetch from 'isomorphic-fetch'

export const CALL_API = Symbol('CALL_API')
export const GET = Symbol('GET')
export const POST = Symbol('POST')
export const PUT = Symbol('PUT')
export const DELETE = Symbol('DELETE')

// const BASE_URL = config.api.baseUrl

// function callApi(endpoint, authenticated) {
//
//   // // change to cookie
//   // let token = localStorage.getItem('id_token') || null
//   // let config = {}
//   //
//   // if (authenticated) {
//   //   if (token) {
//   //     config = {
//   //       headers: { 'Authorization': `Bearer ${token}` }
//   //     }
//   //   }
//   //   else {
//   //     throw "No token saved!"
//   //   }
//   // }
//
//   return fetch(BASE_URL + endpoint, config)
//     .then((response) => {
//       // if error, return Promise.reject(json), so it can be caught below
//
//     })
//
// }

export default store => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  function actionWith(data) {
    const finalAction = { ...action, ...data }
    delete finalAction[CALL_API]
    console.log(finalAction)
    return finalAction
  }

  const { types, endpoint, method } = callAPI
  const [requestType, successType, failureType] = types

    next(actionWith({ type: requestType }))

  return fetch(endpoint)
    .then((res) => {
      // console.log('res:', res)
      // console.log(res.json())
      return res.json()
    })
    .then((json) => {
      // console.log('json', json)
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


  // callApi(endpoint, authenticated)
  //   .then((res) => {
  //     return next({
  //       res,
  //       type: successType
  //     })
  //   })
  //   .catch((err) => {
  //     error: err.message || 'There was an error',
  //     type: errorType
  //   })
}
