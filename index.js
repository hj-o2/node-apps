const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/v1/quiz", (req, res) => {
  const answer = req.body.answer;
  // answer === "2" ? res.send("<h1>正解</h1>") : res.send("<h1>不正解</h1>");
  answer === "2" ? res.redirect("/correct.html") : res.redirect("/wrong.html");
});

app.get("/api/v1/about/users", (req, res) => {
  res.send({
    name: "Mike",
    age: 30,
  });
});

app.listen(3000, () => {
  console.log("building server ....");
});
