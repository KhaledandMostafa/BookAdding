const express = require("express");
const cors = require("cors");
const app = express();
const books = require("./books");

app.use(cors());
app.use(express.json());

app.use("/books", books);

app.listen(8080, console.log("server running"));
