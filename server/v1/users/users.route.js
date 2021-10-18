import express from "express";
import { usersModel } from "./users.scheme";
const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get("/", function (req, res, next) {
  usersModel.find({});
  res.send("respond with a resource" + process.env.MONGODB_URI);
});

export { usersRouter };
