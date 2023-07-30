import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<h1>Tinh</h1>
  <p>
    CloudFront Image with S3 Origin: https://dget5eqckjiws.cloudfront.net/f132676070524afd8e20945648c37314.jpg
  </p>
  <img src="https://dget5eqckjiws.cloudfront.net/f132676070524afd8e20945648c37314.jpg" />
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
