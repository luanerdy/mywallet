import pg from 'pg';
const {Pool} = pg;

const info = {
    host: 'localhost',
    user: 'postgres',
    password: '153759',
    database: 'mywallet',
    port: 5432
}

const connection = new Pool(info);

export {connection};
