import React from 'react';

export default function GameBoard(props) {
  return (
    <section class="game">
      <h2 id="feedback">Make your Guess!</h2>
      <form>
        <input type="text" name="userGuess" id="userGuess" class="text"
          maxLength="3" autoComplete="off" placeholder="Enter your Guess"
          required>
        </input>

        <input type="submit" id="guessButton" class="button"
        name="submit" value="Guess">
        </input>
      </form>
      <p>Guess #
          <span id="count">0</span>
          !
      </p>

      <ul id="guessList" class="guessBox clearfix"></ul>


    </section>
    
  );
}