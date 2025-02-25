import express from "express";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());

app.get("/", async (req, res) => {
  const apiCall = await fetch("https://fakestoreapi.com/products?limit=20");
  const data = await apiCall.json();
  res.json(data);
});

app.listen(5000, () => {
  console.log(`app is listening to port ${port}`);
});
