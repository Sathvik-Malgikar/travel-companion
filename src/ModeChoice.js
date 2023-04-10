import React, { useState } from "react";
import { Link } from "react-router-dom";

function TravelSurvey() {
  const [q1Answer, setQ1Answer] = useState("");
  const [q2Answer, setQ2Answer] = useState("");

  const handleQ1Change = (event) => {
    setQ1Answer(event.target.value);
  };

  const handleQ2Change = (event) => {
    setQ2Answer(event.target.value);
  };

  return (
    <div>
      <h2>Travel Survey</h2>
      <div>
        <p>
          Q1: What is your most frequently used means of travel from your home
          to work location?
        </p>
        <div>
          <label>
            <input
              type="radio"
              name="q1"
              value="Bus"
              onChange={handleQ1Change}
              checked={q1Answer === "Bus"}
            />
            Bus
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="q1"
              value="Metro"
              onChange={handleQ1Change}
              checked={q1Answer === "Metro"}
            />
            Metro
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="q1"
              value="Own Two-wheeler"
              onChange={handleQ1Change}
              checked={q1Answer === "Own Two-wheeler"}
            />
            Own Two-wheeler
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="q1"
              value="Own Car"
              onChange={handleQ1Change}
              checked={q1Answer === "Own Car"}
            />
            Own Car
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="q1"
              value="Walk / Bicycle"
              onChange={handleQ1Change}
              checked={q1Answer === "Walk / Bicycle"}
            />
            Walk / Bicycle
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="q1"
              value="Auto"
              onChange={handleQ1Change}
              checked={q1Answer === "Auto"}
            />
            Auto
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="q1"
              value="App based ride hailing cab services including Ola / Uber"
              onChange={handleQ1Change}
              checked={
                q1Answer ===
                "App based ride hailing cab services including Ola / Uber"
              }
            />
            App based ride hailing cab services including Ola / Uber
          </label>
        </div>
      </div>

<br></br>
<br></br>
<p>
Q2: What is the total distance between your home and workplace?
        </p>
<div>
          <label>
            <input type="radio" name="q2" value={0} onChange={handleQ2Change} checked={q2Answer === '< 5 km'} />
            {'< 5 km'}
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="q2" value={1} onChange={handleQ2Change} checked={q2Answer === '5 - 10 km'} />
            {'5 - 10 km'}
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="q2" value={2}  onChange={handleQ2Change} checked={q2Answer === '10 - 15 km'} />
            {'10 - 15 km'}
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="q2" value={3} onChange={handleQ2Change} checked={q2Answer === '15 - 20 km'} />
            {'15 - 20 km'}
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="q2" value={4}  onChange={handleQ2Change} checked={q2Answer === '20 - 25 km'} />
            {'20 - 25 km'}
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="q2" value={5}  onChange={handleQ2Change} checked={q2Answer === '> 25 km'} />
            {'> 25 km'}
          </label>
        </div>  
        <Link   to="/mode-2" state={{q1Answer,q2Answer}} >Go to choose Mode</Link>
    </div>
  );
}

export default TravelSurvey;
