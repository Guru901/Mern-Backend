require("dotenv").config();

const express = require("express");
const cors = require("cors");
const productRouter = require("./router/product.route.js");
const userRouter = require("./router/user.route.js");
const db = require("./db/db.js");

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
