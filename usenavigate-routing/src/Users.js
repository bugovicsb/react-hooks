import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const { id, userHash } = useParams();
  const { pathname, search, hash } = useLocation();

  return (
    <div>
      <h1>Users</h1>
      <p>
        User ID: {id}, User Hash: {userHash}
      </p>
      <p>
        pathname: {pathname}, search: {search}, hash: {hash}
      </p>
      <button type="button" onClick={() => navigate("/")}>
        Go back
      </button>
    </div>
  );
};

export default Users;
