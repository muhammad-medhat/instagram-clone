import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import functions from "./apiCalls.js";
const { createUser, getProfile } = functions;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/*
 * routes */
app.post("/createUser", (req, res) => {
  const body = req.body;
  createUser(body.firstName, body.lastName, body.userName).then((data) => {
    res.json(data);
  });
});
app.get("/getProfile", (req, res) => {
  const user = req.query.user;
  getProfile(user).then((data) => res.json(data));
});
app.listen(3001, () => console.log("started"));
