import dotevn from 'dotenv'

dotevn.config()

export const PORT = process.env.PORT || 3000

export const NODE_ENV = process.env.NODE_ENV || 'development';

export const DEV_DB_URL = process.env.DEV_DB_URL;

export const PROD_DB_URL = process.env.PROD_DB_URL;