import { db, Sequelize } from '../db';

const Player = db.define('player', {
    name: {
        type: Sequelize.STRING,
    },
});

const Team = db.define('team', {
    name: {
        type: Sequelize.STRING,
    },
});

const Coach = db.define('coach', {
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

