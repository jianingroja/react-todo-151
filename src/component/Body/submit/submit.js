import React from "react";

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.item === "") {
      return;
    } else {
      this.props.onSubmit(this.state.item);
      this.setState({ item: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter Task Name"
          value={this.state.item}
          onChange={(e) => this.setState({ item: e.target.value })}
        />
        <button className="button">Submit</button>
      </form>
    );
  }
}

export default Submit;
