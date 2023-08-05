import sanityClient from "./client.js";
import { createReadStream } from "fs";
import { basename } from "path";
import { nanoid } from "nanoid";

const functions = {};

functions.createUser = (firstName, lastName, username) => {
  return sanityClient.create({
    _type: "user",
    first_name: firstName,
    last_name: lastName,
    username: username,
    created_at: new Date(),
  });
};
export default functions;
