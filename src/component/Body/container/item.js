import React from "react";

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
