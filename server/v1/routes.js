import express from "express";
import usersRouter from "./users/users.route";

const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("health is ok");
});
router.use("/users", usersRouter);

module.exports = router;
