const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((e) => console.log("connected"))
  .catch((e) => {
    console.log(e);
  });
