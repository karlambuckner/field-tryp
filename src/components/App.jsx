import React from "react";

function App(){
  return (

    <div>
      <div id="topnav">
        <a class="active" href="#home">About</a>
        <a href="#contact">Drive for Us</a>
        <a href="#about">Ride with Us</a>
      </div>
    <img src="images/logo.jpg" alt="logo" width="240" height="240"/>
    <h1 id="explore"><strong>EXPLORE MORE</strong></h1>

    <br></br>
      <div>
        <br></br>
        <br></br>
        <h2>We get you outside major cities on a low cost, environmentally friendly round-trip adventure. Select your city below.</h2>
        <br></br>
        <select>
          <option value="Asheville">Asheville, NC</option>
          <option value="Austin">Austin, TX</option>
          <option value="Los Angeles">Los Angeles, CA</option>
          <option value="Portland">Portland, OR</option>
          <option value="Denver">Miami, FL</option>
          <option value="Denver">Seattle, WA</option>
          <option value="Denver">Denver, CO</option>
          <option value="Denver">Flagstaff, AZ</option>
        </select>
      </div>
    </div>
  );
}

export default App;
