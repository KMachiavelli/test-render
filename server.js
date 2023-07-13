const express = require("express");
require("dotenv").config({ override: true, path: "./.env" });
const studentRouter = require("./src/student/routes");
const formsRouter = require("./src/routes/forms");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.use("/api/v1/student", studentRouter);
app.use("/forms", formsRouter);

app.listen(3001, () => {
  console.log(
    "app listening on 3001" + process.env.DB_NAME + process.env.DB_PASSWORD
  );
});
