import React, { useState, useEffect } from "react";
import { fetchUsersList } from "./utils";

const UsersListWithSelect = () => {
  const [usersList, setUsersList] = useState([]);
  const [userCount, setUserCount] = useState(10);

  useEffect(() => {
    console.log("useEffect called");
    fetchUsersList(userCount).then((data) => {
      setUsersList(data);
    });
  }, [userCount]);

  return (
    <div>
      <label>How many users? </label>
      <select onChange={(e) => setUserCount(e.target.value)} value={userCount}>
        {[...Array(20).keys()].map((item) => (
          <option key={item + 1} value={item + 1}>
            {item + 1}
          </option>
        ))}
      </select>

      <div>
        <h2>Users:</h2>
        {usersList.map((u) => (
          <p key={u.email}>{`${u.name.first} ${u.name.last}`}</p>
        ))}
      </div>
    </div>
  );
};

export default UsersListWithSelect;
