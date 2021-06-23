import pg from 'pg';
const {Pool} = pg;

const info = {
    host: 'localhost',
    
}

const connection = new Pool(info);

export {connection};
