import axios from "axios";

// Base API instance
const API = axios.create({ baseURL: "http://localhost:5000" });


// Inject JWT token if available
API.interceptors.request.use((req) => {
  const profile = localStorage.getItem("Profile");
  if (profile) {
    req.headers.authorization = `Bearer ${JSON.parse(profile).token}`;
  }
  return req;
});

// API Endpoints
const ROUTES = {
  LOGIN: "/user/login",
  SIGNUP: "/user/signup",
  ASK_QUESTION: "/questions/Ask",
  GET_ALL_QUESTIONS: "/questions/get",
  DELETE_QUESTION: (id) => `/questions/delete/${id}`,
  VOTE_QUESTION: (id) => `/questions/vote/${id}`,
  POST_ANSWER: (id) => `/answer/post/${id}`,
  DELETE_ANSWER: (id) => `/answer/delete/${id}`,
  GET_ALL_USERS: "/user/getAllUsers",
  UPDATE_USER: (id) => `/user/update/${id}`,
};

// Auth
export const logIn = (formData) => API.post(ROUTES.LOGIN, formData);
export const signUp = (formData) => API.post(ROUTES.SIGNUP, formData);

// Questions
export const postQuestion = (questionData) => API.post(ROUTES.ASK_QUESTION, questionData);
export const getAllQuestions = () => API.get(ROUTES.GET_ALL_QUESTIONS);
export const deleteQuestion = (id) => API.delete(ROUTES.DELETE_QUESTION(id));
export const voteQuestion = (id, value) => API.patch(ROUTES.VOTE_QUESTION(id), { value });

// Answers
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
  API.patch(ROUTES.POST_ANSWER(id), { noOfAnswers, answerBody, userAnswered });

export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(ROUTES.DELETE_ANSWER(id), { answerId, noOfAnswers });

// Users
export const getAllUsers = () => API.get(ROUTES.GET_ALL_USERS);
export const updateProfile = (id, updateData) =>
  API.patch(ROUTES.UPDATE_USER(id), updateData);
