import { db, Sequelize } from '../db';

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    age: {
        type: Sequelize.INTEGER,
    },
});

User.sync();

export { User };
