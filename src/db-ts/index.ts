import { Sequelize } from 'sequelize-typescript';
import config from '../config';

const { host, username, password, database } = config;

export const sequelize = new Sequelize({

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
