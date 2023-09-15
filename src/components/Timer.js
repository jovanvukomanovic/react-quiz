import { useEffect } from "react";

function Timer({ dispatch, secondsRemainig }) {
  const mins = Math.floor(secondsRemainig / 60);
  // to set the seconds to start at 60 then go doen ehen timer go down
  const seconds = secondsRemainig % 60;
  useEffect(() => {
    const interval = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);
    return {
      function() {
        clearInterval(interval);
      },
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
