import { db, Sequelize } from '../db';

export const Player = db.define('player', {
    name: {
        type: Sequelize.STRING,
    },
});

export const Team = db.define('team', {
    name: {
        type: Sequelize.STRING,
    },
});

export const Coach = db.define('coach', {
    name: {
        type: Sequelize.STRING,
    },
});

Player.belongsTo(Team);
Coach.hasOne(Team);

const createTable = async () => {
    await Coach.sync();
    await Team.sync();
    await Player.sync();
};
createTable();

