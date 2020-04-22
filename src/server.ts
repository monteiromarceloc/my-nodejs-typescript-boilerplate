import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ status: 'ok'})
})

app.listen(3333, () => {
  console.log(' Server started at 3333')
});
