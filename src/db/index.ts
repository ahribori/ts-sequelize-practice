import * as Sequelize from 'sequelize';
import config from '../config';

const { host, username, password, database } = config;

const sequelize = new Sequelize({

    host,
    database,
    username,
    password,

    dialect: 'mysql',

    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },

});

export { sequelize as db, Sequelize };
