import React from "react";
import { useFetch } from "./useFetch";

const UsersList = () => {
  const usersList = useFetch("https://randomuser.me/api/?nat=gb&results=10");

  return (
    <div>
      <h2>Users:</h2>
      {usersList?.results?.map((u) => (
        <p key={u.email}>{`${u.name.first} ${u.name.last}`}</p>
      ))}
    </div>
  );
};

export default UsersList;
