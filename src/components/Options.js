function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question?.options.map((option, index) => (
        <button
          //   tricky one ternary(second ternary), because of that to avoid them , or to extract from here in variable(if first condition is correct to go on another condition(witch has its own if else) and when that condition is at end, to go on else of first condition(in this case is empty string ""))
          className={`btn btn-option 
          ${answer === index ? "answer" : null} 
        //   tricky one ternary, because of that to avoid them , or to extract from here in variable 
          ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }    `}
          //   to disable button if answer is not null (if user already clicked)
          disabled={hasAnswered}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
