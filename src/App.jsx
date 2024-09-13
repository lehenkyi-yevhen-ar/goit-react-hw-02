import { useEffect, useState } from "react";
import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Notification from "./components/Notification";

const App = () => {
  const conditionalFeedback = () => {
    const savedFeedback =
      window.localStorage.getItem("feedback");
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  };

  const [feedback, setFeedback] = useState(
    conditionalFeedback
  );

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]:
        prevFeedback[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem(
      "feedback",
      JSON.stringify(feedback)
    );
  }, [feedback]);

  const totalFeedback =
    feedback.good +
    feedback.neutral +
    feedback.bad;

  const positiveFeedback = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          fbs={feedback}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
