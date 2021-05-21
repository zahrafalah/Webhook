const bodyParser = require("body-parser");
const express = require("express");
const routes = require("./route");

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
