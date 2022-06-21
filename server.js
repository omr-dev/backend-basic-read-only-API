import express from "express";
import cors from "cors";
import { siteData } from "./src/models.js";

const app = express();
const port = process.env.PORT || 3007;
const fullURL = `http://localhost:${port}`;

app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Info API</title>
</head>
<style>
    body {
        background-color: #333;
        color: #ccc;
        padding: 20px;
        font-family: monospace;
        font-size: 1.6rem;
    }

    a {
        color: #ccc;
    }

    a:hover {
        color: yellow;
    }
</style>

<body>

    <h1>Info API</h1>

    <ul>
    ${Object.keys(siteData)
      .map((key) => `<li><a href="${fullURL}/${key}">${key}</a></li>`)
      .join("")}
        <li>
            <a href="http://localhost:3007/books">Books</a>
        </li>
    </ul>

</body>

</html>
    `);
});
app.get("/all", (req, res) => {
  res.send(siteData);
});
Object.keys(siteData).forEach((key) => {
  app.get(`/${key}`, (req, res) => {
    res.send(siteData[key]);
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
