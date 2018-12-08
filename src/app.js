var router = require("./routes/routes");
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use(router);

// Running server on localhost:3002
app.listen(3002, () => {
  console.log("Server is up and running...");
});
