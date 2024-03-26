import React, { useState, useEffect } from "react";

const fetchUsersList = () => {
  return fetch("https://randomuser.me/api/?nat=gb&results=10")
    .then((response) => response.json())
    .then((data) => data.results);
};

const UsersListWithContrast = () => {
  const [usersList, setUsersList] = useState([]);
  const [hasContrast, setHasContrast] = useState(false);

  useEffect(() => {
    fetchUsersList().then((usersList) => {
      setUsersList(usersList);
    });
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "c") {
        setHasContrast((val) => !val);
      }
    };
    document.addEventListener("keypress", handleKey);

    return () => {
      document.removeEventListener("keypress", handleKey);
    };
  }, []);

  return (
    <div className={hasContrast ? "has-contrast" : ""}>
      <h2>Users:</h2>
      {usersList.map((u) => (
        <p key={u.email}>{`${u.name.first} ${u.name.last}`}</p>
      ))}
    </div>
  );
};

export default UsersListWithContrast;
