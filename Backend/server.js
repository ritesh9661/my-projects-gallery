const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(
  "mongodb+srv://kritesh5march:Ritesh123@cluster0.3obfhzu.mongodb.net/crud"
);

const UserSchema = new mongoose.Schema({
  Project_Title: String,
});
const UserModel = mongoose.model("users", UserSchema);

app.get("/api", (req, res) => {
  UserModel.find({})
    .then(function (users) {
      res.json(users);
      console.log("Connected to mongodb");
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.listen(5000, () => {
  console.log("server is runing on 5000");
});
