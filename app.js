const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile("public/index.html");
});

app.listen(5000, () => {
    console.log("App listening on port 5000");
});
