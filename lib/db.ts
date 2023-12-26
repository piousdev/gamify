import serverlessMysql from 'serverless-mysql';
import dotenv from 'dotenv';

dotenv.config();

interface Query {
    query: string;
    values: any[];
}

const db = serverlessMysql({
    config: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
    }
});

export async function executeQuery({ query, values }: Query) {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        console.error('Error executing query: ', { query, values, error });
        throw error;
    }
}

export default db;