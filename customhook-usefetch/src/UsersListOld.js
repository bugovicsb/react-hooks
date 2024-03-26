import React, { useState, useEffect } from "react";

const fetchUsersList = () => {
  return fetch("https://randomuser.me/api/?nat=gb&results=10")
    .then((response) => response.json())
    .then((data) => data);
};

const UsersListOld = () => {
  const [usersList, setUsersList] = useState(null);

  useEffect(() => {
    fetchUsersList().then((data) => {
      setUsersList(data);
    });
  }, []);

  return (
    <div>
      <h2>Users:</h2>
      {usersList.results?.map((u) => (
        <p key={u.email}>{`${u.name.first} ${u.name.last}`}</p>
      ))}
    </div>
  );
};

export default UsersListOld;
