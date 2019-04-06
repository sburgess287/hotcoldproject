import React from 'react'; 

import './board.css';
// import GameBoard from './gameboard';
import TopNav from './top-nav';
import GuessSection from './guess-section';
import StatusSection from './status-section';

// Board parent container
// Nav bar
// Title
// Form includes
// User Feedback (take value and compare to winning number)
// Input value( where input is entered into form)
// Submit button (handles input)
// Guess number: tracks number of turns
// Guess History: tracks history from inputs




export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

   restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)){
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }
  
    const difference = Math.abs(guess - this.state.correctAnswer)
    let feedback; 

    if (difference >= 30) {
      feedback = "You're cold"
    } else if (difference >= 10) {
      feedback = "You're warm"
    } else if (difference >= 1) {
      feedback = "You're HOT"
    } else {
      feedback = "you got it!"
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    })

    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  }

  generateAuralUpdate() {
    const { guesses, feedback } = this.state;

    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: 
      ${feedback} 
      You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += `${pluralize ? 'In order of most to least recent, they are'
      : 'it was'}: ${guesses.reverse.length().join(', ')}`;
    }

    this.setState({ auralStatus });
  }
  
  render () {
    const { feedback, guesses, auralStatus } = this.state;
    const guessCount = guesses.length;

    return (
      // Header (I call it TopNav)
      // break apart GameBoard into 2 parts
      // GuessSection done
      // StatusSection
      // InfoSection (lowest priority)
      <div id="parent">
        <TopNav
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
          
        >
        </TopNav>
        <main role="main">
        {/* <GameBoard></GameBoard> */}
        <GuessSection 
          feedback={feedback}
          guessCount={guessCount}
          onMakeGuess={guess => this.makeGuess(guess)}
        
        />
        <StatusSection guesses={guesses}
          auralStatus={auralStatus}
        />
        </main>

        
      </div>
      




    )

  }
}


// export default function Board() {
//   return (
//     <div id="parent">
//       <header>
//       <nav>
//         <ul class="clearfix">
//           <li>
//             <a class="what" href="#">What ?</a>
//           </li>
//           <li>
//             <a class="new" href="#"> + New Game</a>
//           </li>
//         </ul>
//       </nav>
//       <h1>HOT or COLD</h1>
//       </header>
//       <section class="game">
        
//         <h2 id="feedback">Make your Guess!</h2>
//         <form>
//           <input type="text" name="userGuess" id="userGuess" class="text"
//             maxLength="3" autoComplete="off" placeholder="Enter your Guess"
//             required>
//           </input>

//           <input type="submit" id="guessButton" class="button"
//           name="submit" value="Guess">
//           </input>
//         </form>
        
//         <p>Guess #
//           <span id="count">0</span>
//           !
//         </p>

//         <ul id="guessList" class="guessBox clearfix"></ul>

//       </section>

//     </div>
    
//   )
// }