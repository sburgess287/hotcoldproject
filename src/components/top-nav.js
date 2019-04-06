import React from 'react';


// need to add logic to click button and start game over
export default function TopNav(props) {
  return (
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
  )
}