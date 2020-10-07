import React from "react";
import "./Todo.css";
import Header from "./component/Header/Header";
import App from "./component/Body/body";
import Footer from "./component/Footer/Footer";

class Todo extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <App />
        <Footer />
      </div>
    );
  }
}

export default Todo;
