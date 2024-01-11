import {serial, text, mysqlTableCreator} from 'drizzle-orm/mysql-core'

const testTableCreator= mysqlTableCreator((table_name)=>`test_${table_name}`)

export const testTable = testTableCreator("test", {
    id: serial('id').primaryKey(),
    message: text('message'),
    })
