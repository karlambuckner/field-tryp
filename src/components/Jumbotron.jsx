import React from "react";
import PropTypes from "prop-types";

function Jumbotron(props){
  var stylesComponents = {
    backgroundColor: 'blue',
    color:'white',
    fontSize: '45px',
    fontFamily: 'Lobster',
    fontStyle: 'cursive',
    width: '100%',
    paddingBottom: '20px'
  }
  return (
<div style={stylesComponents}>
<div className="billboard">
  <div className="img"></div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <br></br>
                <h1 className=
                "white">
                  Explore More
                </h1>
                <a href="#" id="other">Login</a>
                <br></br>
                <a href="#" id="other">Sign Up</a>
            </div>
        </div>
    </div>
</div>
</div>
  );
}

export default Jumbotron;
