import {serial, varchar, mysqlTableCreator, timestamp} from 'drizzle-orm/mysql-core'

const authTableCreator= mysqlTableCreator((table_name)=>`auth_${table_name}`)

export const authTable = authTableCreator('users', {
    id: serial('id').primaryKey(),
    email: varchar('email', {length: 255}).unique().notNull(),
    password: varchar('password', {length: 255}).notNull(),
    username: varchar('username', {length: 16}).unique().notNull(),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
    role: varchar('role', {length: 6, enum:['user','admin']}).default('user'), 
})
