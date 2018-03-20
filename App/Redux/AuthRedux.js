import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  authRequest: ['passcode'],
  authSuccess: ['passcode'],
  authFailure: ['error']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  passcode: null,
  fetching: null,
  error: null,
})

/* ------------- Selectors ------------- */

export const AuthSelectors = {
  isLoggedIn: state => {
    return state.passcode != null ? true : false;
  }
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, { passcode }) =>
  state.merge({ fetching: true, passcode })

// successful avatar lookup
export const success = (state, action) => {
  const { passcode } = action
  return state.merge({ fetching: false, error: null, passcode })
}

// failed to get the avatar
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error: error, passcode: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: request,
  [Types.AUTH_SUCCESS]: success,
  [Types.AUTH_FAILURE]: failure
})
