import React from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Post</h1>
      <button type="button" onClick={() => navigate("/")}>
        Go back
      </button>
    </div>
  );
};

export default Post;
