import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <button className="button-footer">All</button>
        <button className="button-footer">Active</button>
        <button className="button-footer">Completed</button>
      </div>
    );
  }
}

export default Footer;
