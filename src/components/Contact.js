import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class Contact extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div className="min-h-dvh">
        <h1>This is contact us page</h1>
        <h3>Please contact us at adfasdfadf@gmail.com</h3>
        <UserContext.Consumer>
          {({ user }) => <h1 className="font-bold text-xl">{user}</h1>}
        </UserContext.Consumer>
        <UserClass
          name={"First "}
          city={"Hyderabad"}
          mail={"rajiv@gmail.com"}
        />
      </div>
    );
  }
}
export default Contact;
