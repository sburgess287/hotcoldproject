import React from 'react';

export default function Feedback(props) {

  const key = props.guessCount;

  let guessAgain;
  if (key !== 0) {
    guessAgain = <span className="visuallyhidden">Guess Again!</span>
  }

  return (
    <h2
      key={key}
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
    {props.feedback} {guessAgain}
    </h2>
  );

}