import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import functions from "./apiCalls.js";
const {
  createUser,
  getProfile,
  createPost,
  getAllPosts,
  getPostsOfFollowing,
  searchForUsername,
} = functions;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });

/*
 * routes */
app.post("/createUser", (req, res) => {
  const body = req.body;
  createUser(body.firstName, body.lastName, body.username).then((data) => {
    res.json(data);
  });
});
app.get("/getProfile", (req, res) => {
  const user = req.query.user;
  getProfile(user).then((data) => res.json(data));
});
app.post("/createPost", upload.single("file"), (req, res) => {
  const body = req.body;
  createPost(body.user, body.caption, req.file).then((data) => res.json(data));
});

app.get("/getPostsOfFollowing", (req, res) => {
  const user = req.query.user;
  getPostsOfFollowing(user)
    .then((data) => {
      var posts = data[0].following;
      posts = posts.map((post) => post.posts);
      posts = posts.flat(1);
      res.json(posts);
    })
    .catch((err) => res.json([]));
});
app.get("/getAllPosts", (req, res) => {
  getAllPosts()
    .then((data) => {
      // var posts = data[0].following;
      // posts = posts.map((post) => post.posts);
      // posts = posts.flat(1);
      res.json(data);
    })
    .catch((err) => res.json([]));
});

app.get("/searchForUsername", (req, res) => {
  const text = req.query.text;
  searchForUsername(text).then((data) => res.json(data));
});

app.listen(3001, () => console.log("started"));
