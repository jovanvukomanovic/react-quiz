function Progress({
  index,
  numOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      {/* in this progres bar we set value at index number(that is at begining 0, to
      start at 0), but we added +Number(answer !== null), that mean that we check if it have answer it is true(and we that true convert to number and that is 1) and if it is false (false is converted to 0 ). If answer is undefined that is differrent from null and that is 1(if we forgot to send answer as prop than answer is undefined)*/}
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index}</strong>/ {numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
