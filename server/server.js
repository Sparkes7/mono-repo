import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

app.listen(8080, function () {
  console.log("running on 8080");
});

app.get("/message", function (request, response) {
  response.json("message");
});
