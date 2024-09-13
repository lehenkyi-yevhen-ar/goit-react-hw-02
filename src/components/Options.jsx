const Options = ({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => {
  const handleClick = (feedbackType) => {
    updateFeedback(feedbackType);
  };

  return (
    <>
      <button
        onClick={() => handleClick("neutral")}
      >
        Neutral
      </button>
      <button onClick={() => handleClick("good")}>
        Good
      </button>
      <button onClick={() => handleClick("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
