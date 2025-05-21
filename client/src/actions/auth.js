import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { fetchAllUsers } from "./users";

// Handles user registration
export const handleSignup = (formInput, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formInput);

    dispatch({ type: "AUTH", data });

    // Use data directly instead of reading from localStorage
    dispatch(setCurrentUser(data));
    dispatch(fetchAllUsers());

    navigate("/");
  } catch (error) {
    console.error("Signup failed:", error?.response?.data?.message || error.message);
  }
};

// Handles user login
export const handleLogin = (formInput, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formInput);

    dispatch({ type: "AUTH", data });

    // Use data directly instead of reading from localStorage
    dispatch(setCurrentUser(data));

    navigate("/");
  } catch (error) {
    console.error("Login failed:", error?.response?.data?.message || error.message);
  }
};
