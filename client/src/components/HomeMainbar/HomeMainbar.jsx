import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.currentUserReducer);

  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    if (!user) {
      alert("Please log in or sign up to ask a question.");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        <h1>{location.pathname === "/" ? "Top Questions" : "All Questions"}</h1>
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>

      <div>
        {questionsList?.data ? (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
