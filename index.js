const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use("/git", require("./routes"));

app.listen(port, console.log(`connect to: ${port}`));
