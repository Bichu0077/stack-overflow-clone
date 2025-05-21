// Action type constant to avoid hardcoding in reducers
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";

// Action creator to set the current logged-in user
export const setCurrentUser = (userData) => ({
  type: FETCH_CURRENT_USER,
  payload: userData,
});
