import { db, Sequelize } from '../db';

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    },
});

const Project = db.define('project', {
    name: {
        type: Sequelize.STRING,
    },
});

Project.hasMany(User, { as: 'Workers' });

const createTable = async () => {
    await Project.sync();
    await User.sync();
};
createTable();
