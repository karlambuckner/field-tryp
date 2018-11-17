import React from "react";
import PropTypes from "prop-types";

function Contact(props){
  var styleContact ={
    color: 'blue',
    padding: '10'
  }
  return (
    <div style={styleContact}>
    <div>
    <h3>Questions? Call us!</h3>
    <h4>Customer Support 1-800-999-9999</h4>
    </div>
    </div>
  );
}

export default Contact;
