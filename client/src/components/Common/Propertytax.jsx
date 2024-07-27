import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Propertytax() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="icon">🏠</div>
          <div className="title"><Link to="/paypropertytax">Pay Property Tax</Link></div>
        </div>
        <div className="card">
          <div className="icon">🏡</div>
          <div className="title">My Properties (0)</div>
        </div>
        <div className="card">
          <div className="icon">🏠</div>
          <div className="title">My Applications (0)</div>
        </div>
      </div>
      <div className="sections">
        <div className="section">
          <div className="section-title">How it works?</div>
        </div>
        <div className="section">
          <div className="section-title">Examples</div>
        </div>
      </div>
    </div>
  );
}

export default Propertytax;
