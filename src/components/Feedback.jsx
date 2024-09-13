const Feedback = ({fbs, totalFeedback, positiveFeedback}) => {
  return (
    <>
      <div>
        <p>Good: {fbs.good}</p>
        <p>Neutral: {fbs.neutral}</p>
        <p>Bad: {fbs.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
      </div>
    </>
  );
};

export default Feedback;
