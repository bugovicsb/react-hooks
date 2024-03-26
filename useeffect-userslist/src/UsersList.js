import React, { useState, useEffect } from "react";
import { fetchUsersList } from "./utils";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchUsersList(10).then((data) => {
      setUsersList(data);
    });
  }, []);

  return (
    <div>
      <h2>Users:</h2>
      {usersList.map((u) => (
        <p key={u.email}>{`${u.name.first} ${u.name.last}`}</p>
      ))}
    </div>
  );
};

export default UsersList;
