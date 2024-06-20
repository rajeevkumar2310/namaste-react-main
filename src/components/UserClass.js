import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    // console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + "Child component did mount");
  }
  render() {
    const { name, city, mail } = this.props;
    // console.log(this.props.name + "child render");
    return (
      <div className="user-class">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
        <h1>Name: {name}</h1>
        <h2>City: {city}</h2>
        <h2>Contact: {mail}</h2>
      </div>
    );
  }
}

export default UserClass;
