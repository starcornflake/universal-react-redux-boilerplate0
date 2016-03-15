import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  JWT_SET,
} from '../actions/authActionCreators'


function authReducer(state = {
  isFetching: false,
  error: '',
  jwt: ''  // check presense of jwt to check if user is authenticated
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: action.error.message, // success can have errors
        jwt: action.data.jwt
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error.message,
        jwt: '',
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: action.error.message,
        jwt: '',
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error.message
      }
    case JWT_SET: // for server side rendering, in case token is on the cookie
      return {
        ...state,
        jwt: action.data.jwt
      }
    default:
      return state
  }
}

export default authReducer
