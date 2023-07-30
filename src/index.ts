require('dotenv').config()

import express from 'express';

console.log('process.env.MYSQL_HOST', process.env.MYSQL_HOST)

const app = express()
const port = 3000

app.get('/', async (req, res) => {
  try {
    const knex = require('knex')({
      client: 'mysql2',
      connection: {
        host: process.env.MYSQL_HOST,
        port: 3306,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
      }
    });

    const resp = await knex.raw('SELECT version() AS v;')
    const result = resp[0][0];

    knex.destroy();

    res.send(`<h1>Tinh</h1>
    <p> RDS Mysql Version: ${ result.v }</p>
    <p>
      CloudFront Image with S3 Origin: https://dget5eqckjiws.cloudfront.net/f132676070524afd8e20945648c37314.jpg
    </p>
    <img src="https://dget5eqckjiws.cloudfront.net/f132676070524afd8e20945648c37314.jpg" />
    `)
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
