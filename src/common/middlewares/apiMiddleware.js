import config from '../config'

import fetch from 'isomorphic-fetch'

export const CALL_API = 'CALL_API'
export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'

function actionWith(action, data) {
  const finalAction = { ...action, ...data }
  delete finalAction[CALL_API]
  return finalAction
}


//TODO: COMBINE client + server into 1 function
// Client supports everything.
// For methods other than GET or HEAD, make sure to set X-XSRF-Token header
function clientFetch(callAPI, store, next, action) {
  const { types, endpoint, method, body } = callAPI
  const [ requestType, successType, failureType ] = types

  const xsrfToken = store.getState().user.xsrfToken

  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  if (method !== GET) {
    headers = {
      ...headers,
      'X-XSRF-Token': xsrfToken
    }
  }

  return fetch(endpoint, {
    method,
    headers,
    credentials: 'same-origin',
    body: JSON.stringify(body) // can be undefined, in case action creator doesn't provide body
  })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      // check if success, otherwise, Promise.reject(json)
      return next(actionWith(action, {
        type: successType,
        data: json.data,
      }))
    })
    .catch((json) => {
      return next({
        type: failureType,
        error: json.error
      })
    })
}

// Server doesn't store cookies, so we must pass cookies manually.
// Also, it only supports GET methods, so no body fields or xsrf token
function serverFetch(callAPI, store, next, action) {
  const { types, endpoint, method } = callAPI
  const [ requestType, successType, failureType ] = types

  if (method !== GET) {
    return // returning null, undefined, or nothing is enough to resolve this promise
  }

  const jwt = store.getState().user.jwt
console.log('store state', store.getState())
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  if (jwt) {
    headers = {
      ...headers,
      'Cookie': `jwt=${jwt}`
    }
  }

  console.log('servers jwt', headers)

  return fetch(endpoint, {
    GET,
    headers
  })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      // check if success, otherwise, Promise.reject(json)

        // This server side doesn't matter for non-GET methods, since we won't
        // POST or DELETE anything at this stage.
        // Also, this is the ONLY place where shouldFetch is false.
        // Only states who have GET methods to preload data will have shouldFetch
      return next(actionWith(action, {
        type: successType,
        data: json.data,
        shouldFetch: false,
      }))
    })
    .catch((json) => {
      return next({
        type: failureType,
        error: json.error
      })
    })
}


const apiMiddleware = store => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const { types, endpoint, method, body } = callAPI
  const [ requestType, successType, failureType ] = types

  if (!__CLIENT__ && method !== GET) {
    return Promise.resolve()
  }

  function actionWith(action, data) {
    const finalAction = { ...action, ...data }
    delete finalAction[CALL_API]
    return finalAction
  }

  next(actionWith({
    type: requestType
  }))

  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  if (__CLIENT__ && method !== GET) {
    headers = {
      ...headers,
      'X-XSRF-Token': xsrfToken,
    }
  }

  const jwt = store.getState().auth.jwt
  if (!__CLIENT__ && jwt) {
    if (jwt) {
      headers = {
        ...headers,
        'Cookie': `jwt=${jwt}`
      }
    }
  }


  return fetch(endpoint, {
    method,
    headers,
    credentials: 'same-origin',
    body: JSON.stringify(body) // can be undefined, in case action creator doesn't provide body
  })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      // check if success, otherwise, Promise.reject(json)
      if (__CLIENT__) {
        // By default, it should always fetch on componentDidMount.
        // The only time we ever update shouldFetch back to true is when
        // we try to render it again on client.
        return next(actionWith({
          type: successType,
          data: json.data,
          shouldFetch: true
        }))
      } else {
        // This server side doesn't matter for non-GET methods, since we won't
        // POST or DELETE anything at this stage.
        // Also, this is the ONLY place where shouldFetch is false.
        // Only states who have GET methods to preload data will have shouldFetch
        return next(actionWith({
          type: successType,
          data: json.data,
          shouldFetch: false,
        }))
      }
    })
    .catch((json) => {
      return next({
        type: failureType,
        error: json.error
      })
    })


}
// Note: If any of these API calls fail due to auth error, redirect user to login page


// in client, fetch should automatically send its cookies.
// in server, we need to manually set cookie header


export default apiMiddleware
