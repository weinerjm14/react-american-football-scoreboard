//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
// import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [currentDown, setCurrentDown] = useState(1);
  const [currentQuarter, setCurrentQuarter] = useState(1);
  const [lionsScore, setLionScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const homeTouchDown = e => {
    setLionScore(lionsScore + 7);
  };
  const homeFieldGoal = e => {
    setLionScore(lionsScore + 3);
  };
  const awayTouchDown = e => {
    setTigersScore(tigersScore + 7);
  };
  const awayFieldGoal = e => {
    setTigersScore(tigersScore + 3);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">{currentDown}</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">0</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">21</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{currentQuarter}</div>
          </div>
        </div>
        <section className="buttons bottomRow">
            <button
              className="down_button"
              onClick={e => {
                if (currentDown < 4) {
                  setCurrentDown(currentDown + 1);
                } else {
                  setCurrentDown(1);
                }
              }}
            >
              Set Down
            </button>
            <button
              className="reset_down_button"
              onClick={e => {
               setCurrentDown(1);
                }
              }
            >
              Reset Down
            </button>
        
            <button
              className="quarter_button"
              onClick={e => {
                if (currentQuarter < 4) {
                  setCurrentQuarter(currentQuarter + 1);
                } else {
                  setCurrentQuarter(1);
                }
              }}
            >
              Set Quarter
            </button>
         
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button className="homeButtons__touchdown" onClick={homeTouchDown}>
              Home Touchdown
            </button>
            <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>
              Home Field Goal
            </button>
          
            <button className="awayButtons__touchdown" onClick={awayTouchDown}>
              Away Touchdown
            </button>
            <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>
              Away Field Goal
            </button>
          
        </section>
      </section>
    </div>
  );
}

export default App;
