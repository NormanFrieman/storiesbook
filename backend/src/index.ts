import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})