import React from "react";
import "./body.css";

class App extends React.Component {
  state = {
    tasks: [
      "task1",
      "task2",
      "learning JavaScript",
      "learning somethingPretty",
    ],
  };

  handelDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };

  handelSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  render() {
    return (
      <div className="wrapper">
        <div>
          <SubmitForm onFormSubmit={this.handelSubmit} />
          <TodoList tasks={this.state.tasks} onDelete={this.handelDelete} />
        </div>
      </div>
    );
  }
}

/* 展示一共有几个待办事项
const Header = (props) => {
  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        You have {props.numTodos} Todos
      </h1>
    </div>
  );
};
*/

const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return (
      <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    );
  });
  return (
    <div className="list-wrapper">
      <ol>{todos}</ol>
    </div>
  );
};

const Todo = (props) => {
  return (
    <li className={props.id % 2 === 0 ? null : "even"}>
      <input type="checkbox" />
      {props.content}
    </li>
  );
};

class SubmitForm extends React.Component {
  state = { term: "" };

  handelSubmit = (e) => {
    e.preventDefault();
    if (this.state.term === "") {
      return;
    } else {
      this.props.onFormSubmit(this.state.term);
      this.setState({ term: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter Item"
          value={this.state.term}
          onChange={(e) => this.setState({ term: e.target.value })}
        />
        <button className="button">Add</button>
      </form>
    );
  }
}

export default App;
