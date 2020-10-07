import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    );
  }
}

export default Footer;
