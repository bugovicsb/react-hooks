import React from "react";
import "./styles.css";
import UsersList from "./UsersList";
import UsersListClass from "./UsersListClass";
import UsersListWithSelect from "./UsersListWithSelect";
import UsersListWithContrast from "./UsersListWithContrast";

const App = () => {
  return (
    <div className="App">
      <UsersList />
      {/* <UsersListClass /> */}
      {/* <UsersListWithSelect /> */}
      {/* <UsersListWithContrast /> */}
    </div>
  );
};

export default App;
