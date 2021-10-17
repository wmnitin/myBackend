import { mongoose } from "../../config/database";
const { Schema } = mongoose;

const usersSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const usersModel = mongoose.model("Users", usersSchema);

export { usersModel };
