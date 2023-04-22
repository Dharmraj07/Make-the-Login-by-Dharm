const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: "http://127.0.0.1:3000",
  methods: "GET, POST",
  allowedHeaders: "Content-Type, Authorization"
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require('./routes/users');
const User = require("./models/users");
const PORT = 8000;

app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
