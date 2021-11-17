import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const {
    DEV_POSTGRES_HOST,
    DEV_POSTGRES_DB,
    DEV_POSTGRES_USER,
    DEV_POSTGRES_PASSWORD
} = process.env

//connection to the db
const database = new Pool ({
    host: DEV_POSTGRES_HOST,
    database: DEV_POSTGRES_DB,
    user: DEV_POSTGRES_USER,
    password: DEV_POSTGRES_PASSWORD
})

export default database