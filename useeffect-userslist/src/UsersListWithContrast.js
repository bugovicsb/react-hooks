import React, { useState, useEffect } from "react";
import { fetchUsersList } from "./utils";

const UsersListWithContrast = () => {
  const [usersList, setUsersList] = useState([]);
  const [hasContrast, setHasContrast] = useState(false);

  useEffect(() => {
    fetchUsersList(10).then((data) => {
      setUsersList(data);
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
