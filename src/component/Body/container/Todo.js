import React from "react";
import "./TodoList.css";

//这是每一条待办任务的组件
/*
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <li>
        <input type="checkbox"></input>
        <input type="text" value={this.props.task} />
      </li>
    );
  }
}

export default Item;
*/

function Todo(props) {
  return (
    <li className={props.id % 2 === 0 ? null : "even"}>
      <input type="checkbox" className="checkbox" />
      <input type="text" className="input-text" value={props.content} />
    </li>
  );
}

export default Todo;
