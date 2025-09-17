function FinishScreen({ points, maxPosiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPosiblePoints) * 100;
  let imoji;
  if (percentage === 100) imoji = "🥇";
  if (percentage >= 80 && percentage < 100) imoji = "🥈";
  if (percentage >= 50 && percentage < 80) imoji = "🥉";
  if (percentage >= 0 && percentage < 50) imoji = "🤔";
  if (percentage === 0) imoji = "👎";

  return (
    <>
      <p className="result">
        {imoji} Your Scored <strong>{points}</strong> out of {maxPosiblePoints}(
        {Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(Highscore : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
