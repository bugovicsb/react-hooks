import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import Users from "./Users";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/post/hello-world">
            Post
          </Link>
          <Link className="link" to="/users/7456/axys12">
            Users
          </Link>
        </nav>
        <Routes>
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/users/:id/:userHash" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
