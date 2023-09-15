function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";

  console.log(Math.ceil(percentage));
  return (
    <>
      <p className="result">
        <strong>{emoji}</strong> You scored <strong>{points}</strong> of{" "}
        {maxPossiblePoints} <em></em>({Math.ceil(percentage)})%
      </p>
      <p className="highscore">(Highscore: {highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "playAgain",
          })
        }
      >
        Play Again
      </button>
    </>
  );
}

export default FinishScreen;
