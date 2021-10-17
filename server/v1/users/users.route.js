import express from "express";
import { usersModel } from "./users.scheme";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  usersModel.find({});
  res.send("respond with a resource" + process.env.MONGODB_URI);
});

export { router };
