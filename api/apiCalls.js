import sanityClient from "./client.js";
import { createReadStream } from "fs";
import { basename } from "path";
import { nanoid } from "nanoid";

const functions = {};

functions.createUser = (firstName, lastName, username) => {
  console.log("inp", firstName, lastName, username);
  /**
   * unknown bug username is not sent correctly from frontend
   */
  return sanityClient.create({
    _type: "user",
    first_name: firstName,
    last_name: lastName,
    username: username,
    created_at: new Date(),
  });
};

functions.getProfile = (user) => {
  console.log({ user });
  /**
   * i will let it check for first_name because of the bug in setting username
   */
  return sanityClient.fetch(
    `*[_type == "user" && first_name == $username]{
      ...,
      "following": count(following),
      "followers": *[_type == "user" && references(^._id)],
      photo{
        asset->{
          _id,
          url
        }
      }
    }`,
    { username: user }
  );
};
export default functions;
