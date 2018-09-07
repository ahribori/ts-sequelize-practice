import { db, Sequelize } from '../db';

export const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    },
    projectId: {
        type: Sequelize.INTEGER,
    },
});

export const Project = db.define('project', {
    name: {
        type: Sequelize.STRING,
    },
});

Project.hasMany(User);

const createTable = async () => {
    await Project.sync();
    await User.sync();
};
createTable();
