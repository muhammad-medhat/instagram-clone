import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3001, () => console.log("started"));
