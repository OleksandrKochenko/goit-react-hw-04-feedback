import React from 'react';
import PropTypes from 'prop-types';
import css from './feedback.module.css';

const FeedbackOptions = ({ onClick }) => {
  return (
    <div className={css.feedback_buttons}>
      <button
        className={css.button}
        type="button"
        name="good"
        onClick={onClick}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        name="neutral"
        onClick={onClick}
      >
        Neutral
      </button>
      <button className={css.button} type="button" name="bad" onClick={onClick}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
};

export default FeedbackOptions;
