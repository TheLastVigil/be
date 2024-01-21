import {
  getRandomStaff,
} from "./random.service.ts";
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors())
const port = 3000;

app.get("/random", async (req, res) => {
  const result = await getRandomStaff();
  res.send(result);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
