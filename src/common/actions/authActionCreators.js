import config from '../config'

import {
  CALL_API,
  GET,
  POST,
  PUT,
  DELETE,
} from '../middlewares/apiMiddleware'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const JWT_SET = 'JWT_SET'

export function setJWT(jwt) {
  return {
    type: JWT_SET,
    data: {
      jwt
    }
  }
}

export function login(username, password) {
  return {
    [CALL_API]: {
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      endpoint: `${config.api.baseUrl}/sessions`,
      method: POST,
      body: {
        username,
        password
      }
    }
  }
}
