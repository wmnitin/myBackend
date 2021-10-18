import mongoose from "mongoose";

export const makeDBConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("connection is successful !");
    })
    .catch((err) => console.log("error occured in db connection", err));
};
