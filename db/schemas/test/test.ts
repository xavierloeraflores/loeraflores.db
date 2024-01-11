import {mysqlSchema, serial, text} from 'drizzle-orm/mysql-core'

export const testSchema = mysqlSchema("test")

export const testTable = testSchema.table("test", {
    id: serial('id').primaryKey(),
    message: text('message'),
    })
