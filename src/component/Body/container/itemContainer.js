import React from "react";
import Item from "./item";

class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <ol>
          {this.props.tasks.map((task, index) => {
            return <Item key={index} id={index} task={task} />;
          })}
        </ol>
      </div>
    );
  }
}

export default ItemContainer;
