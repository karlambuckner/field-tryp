import React from "react";

function Dropdown(){
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Cities
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Asheville, NC</a>
    <a className="dropdown-item" href="#">Portland, OR</a>
    <a className="dropdown-item" href="#">Denver, CO</a>
  </div>
</div>
  );
}

export default Dropdown;
