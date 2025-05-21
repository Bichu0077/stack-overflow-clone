import * as api from "../api";

// Action type constants
export const POST_QUESTION = "POST_QUESTION";
export const FETCH_ALL_QUESTIONS = "FETCH_ALL_QUESTIONS";
export const POST_ANSWER = "POST_ANSWER";

// Submit a new question
export const submitNewQuestion = (questionPayload, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionPayload);
    dispatch({ type: POST_QUESTION, payload: data });
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.error("Error posting question:", error?.response?.data?.message || error.message);
  }
};

// Get all questions
export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestions();
    dispatch({ type: FETCH_ALL_QUESTIONS, payload: data });
  } catch (error) {
    console.error("Error fetching questions:", error?.response?.data?.message || error.message);
  }
};

// Delete a question by ID
export const removeQuestionById = (questionId, navigate) => async (dispatch) => {
  try {
    await api.deleteQuestion(questionId);
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.error("Error deleting question:", error?.response?.data?.message || error.message);
  }
};

// Upvote or downvote a question
export const registerQuestionVote = (questionId, voteValue) => async (dispatch) => {
  try {
    await api.voteQuestion(questionId, voteValue);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.error("Error voting on question:", error?.response?.data?.message || error.message);
  }
};

// Add an answer to a question
export const submitAnswer = (answerDetails) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered } = answerDetails;
    const { data } = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered);
    dispatch({ type: POST_ANSWER, payload: data });
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.error("Error submitting answer:", error?.response?.data?.message || error.message);
  }
};

// Remove an answer from a question
export const removeAnswer = (questionId, answerId, updatedAnswerCount) => async (dispatch) => {
  try {
    await api.deleteAnswer(questionId, answerId, updatedAnswerCount);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.error("Error deleting answer:", error?.response?.data?.message || error.message);
  }
};
