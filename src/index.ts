import { db } from './db';

db.getQueryInterface().dropAllTables().then(() => {
    require('./examples/oneToOne');
});

