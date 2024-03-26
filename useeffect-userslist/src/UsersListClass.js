import React, { Component } from "react";
import { fetchUsersList } from "./utils";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: []
    };
  }

  componentDidMount() {
    fetchUsersList(10).then((data) => {
      this.setState({ usersList: data });
    });
  }

  render() {
    return (
      <div>
        <h2>Users:</h2>
        {this.state.usersList.map((u) => (
          <p key={u.email}>{`${u.name.first} ${u.name.last}`}</p>
        ))}
      </div>
    );
  }
}

export default UsersList;
