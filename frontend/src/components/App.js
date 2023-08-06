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
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState("");
  const userCheck = () => {
    debugger;
    return user ? (
      <Navbar.Text>
        Signed in as: <Link to={"/profile/" + user}>{user}</Link> |{" "}
        <Button
          type="button"
          variant="primary"
          onClick={() => {
            setUser("");
            setAlert({
              variant: "warning",
              message: "You are now signed out!",
            });
          }}
        >
          Logout
        </Button>
      </Navbar.Text>
    ) : (
      <Navbar.Text>
        <Link to="/login">Not Signed In</Link>
      </Navbar.Text>
    );
  };
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
                {userCheck()}

                {/* <Navbar.Text>
                  <Link to="/login">Not signed in</Link>
                </Navbar.Text>*/}
                <Navbar.Text className="mx-2">
                  <Link to="/sign-up">Signup</Link>
                </Navbar.Text>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {alert ? (
          <AlertDismissible {...alert} deleteAlert={() => setAlert(null)} />
        ) : null}
        <div className="center p-5">
          <Routes>
            <Route element={<AllPosts />} path="/" exact />
            <Route
              element={<Login setAlert={setAlert} setUser={setUser} />}
              path="/login"
            />
            <Route
              element={<Signup setAlert={setAlert} setUser={setUser} />}
              path="/sign-up"
            />
            <Route element={<Profile />} path="/profile:username" />
            <Route element={<Search />} path="Search" />
            <Route
              element={
                <CreatePost setAlert={setAlert} setUser={setUser} user={user} />
              }
              path="create-post"
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
