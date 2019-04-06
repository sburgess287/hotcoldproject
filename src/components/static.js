import React from 'react'; 

import './board.css';

// Board parent container
//  Nav bar & title

// Form includes
// User Feedback (take value and compare to winning number)
// Input value( where input is entered into form)
// Submit button (handles input)
// Guess number: tracks number of turns
// Guess History: tracks history from inputs


export default function Board() {
  return (
    <div id="parent">
      <header>
      <nav>
        <ul class="clearfix">
          <li>
            <a class="what" href="#">What ?</a>
          </li>
          <li>
            <a class="new" href="#"> + New Game</a>
          </li>
        </ul>
      </nav>
      <h1>HOT or COLD</h1>
      </header>
      <main>
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
      </main>
      
    </div>
    
  )
}