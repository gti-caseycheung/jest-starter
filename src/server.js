import express from 'express';
import {sum} from './lib/utils';

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send(`2 + 2 equals ${sum(2, 2)}\r\n\r\n`);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})