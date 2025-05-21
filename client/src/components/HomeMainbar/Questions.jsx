import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Questions = ({ question }) => {
  const maxTitleLength = window.innerWidth <= 400 ? 70 : 90;
  const truncatedTitle =
    question.questionTitle.length > maxTitleLength
      ? question.questionTitle.substring(0, maxTitleLength) + "..."
      : question.questionTitle;

  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{(question.upVote?.length || 0) - (question.downVote?.length || 0)}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers || 0}</p>
        <p>answers</p>
      </div>
      <div className="display-question-details">
        <Link
          to={`/Questions/${question._id}`}
          className="question-title-link"
          title={question.questionTitle} // shows full title on hover
          aria-label={`View question: ${question.questionTitle}`}
        >
          {truncatedTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags?.map((tag) => (
              <p key={tag}>{tag}</p>
            )) || null}
          </div>
          <p className="display-time">
            asked {moment(question.askedOn).fromNow()} by {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
