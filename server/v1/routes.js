import express from "express";
import { usersRouter } from "./users/users.route";

const router = express.Router();

function Vehicle() {
  this.type = "vehicle";
}

const car = new Vehicle();

router.get("/", function (req, res, next) {
  console.log(car);
  res.send("health is ok");
});
router.use("/users", usersRouter);

export default router;
