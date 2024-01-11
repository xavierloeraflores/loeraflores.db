import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './db/schemas/*',
  out: './drizzle',
  driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    uri: process.env.DATABASE_URI,
  },
} satisfies Config;