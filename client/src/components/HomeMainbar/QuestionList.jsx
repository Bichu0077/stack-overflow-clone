import React from "react";
import PropTypes from "prop-types";
import Questions from "./Questions";

const QuestionList = ({ questionsList }) => {
  if (!questionsList || questionsList.length === 0) {
    return <p>No questions available.</p>;
  }

  return (
    <>
      {questionsList.map((question) => (
        <Questions question={question} key={question._id} />
      ))}
    </>
  );
};

QuestionList.propTypes = {
  questionsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuestionList;
