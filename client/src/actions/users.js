import * as api from "../api";

// Action type constants
export const FETCH_USERS = "FETCH_USERS";
export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";

// Fetch all registered users
export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUsers();
    dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    console.error("Error fetching users:", error?.response?.data?.message || error.message);
  }
};

// Update user profile by ID
export const updateUserProfile = (userId, updatedInfo) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(userId, updatedInfo);
    dispatch({ type: UPDATE_CURRENT_USER, payload: data });
  } catch (error) {
    console.error("Error updating profile:", error?.response?.data?.message || error.message);
  }
};
