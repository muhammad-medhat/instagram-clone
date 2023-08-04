import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AlertDismissible from "./AlertDismissible";
import CreatePost from "./CreatePost";
import Login from "./Login";

import Profile from "./Profile";
import Search from "./Search";
import AllPosts from "./AllPosts";
import Signup from "./Signup";

import "../css/App.css";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand>Instagram Clone</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Feed</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/search">
                  <Nav.Link>Search</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/create-post">
                  <Nav.Link>Post</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <Navbar.Text>
                  <Link to="/login">Not signed im</Link>
                </Navbar.Text>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route element={<AllPosts />} path="/" exact />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="sign-up" />
          <Route element={<Profile />} path="/profile:username" />
          <Route element={<Search />} path="Search" />
          <Route element={<CreatePost />} path="create-post" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
