import 'dotenv/config'
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
// import { drizzle } from "drizzle-orm/mysql2";
// import mysql from "mysql2/promise";


const connection = connect({url: process.env.DATABASE_URI});
// const connection = await mysql.createConnection(process.env.DATABASE_URI);

export const db = drizzle(connection);