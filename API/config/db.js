const Pool = require("pg").Pool
require("dotenv").config()

//const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD.toString()}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`

const proConfig = process.env.DATABASE_URL

const pool = process.env.NODE_ENV !== "production" ? 
new Pool ({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD.toString(),
  database: process.env.DB_DATABASE,
  port: 5432,
  host: process.env.DB_HOST
})

:
new Pool({
    connectionString:proConfig,
    ssl: {
        rejectUnauthorized: false
      }
})

module.exports = pool
