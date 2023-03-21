import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './feedback.module.css';
import FeedbackOptions from './options';
import Statistics from './statistics';

export default function Section({ title }) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const name = e.currentTarget.name;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return `${Math.round((good / total) * 100)}%`;
  };

  return (
    <div className={css.feedback_container}>
      <h2 className={css.feedback_title}>{title}</h2>
      <FeedbackOptions onClick={handleClick} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
