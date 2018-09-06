import { db, Sequelize } from '../db';

const ItemTag = db.define('item_tag', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tag_id: {
        type: Sequelize.INTEGER,
        unique: 'item_tag_taggable',
    },
    taggable: {
        type: Sequelize.STRING,
        unique: 'item_tag_taggable',
    },
    taggable_id: {
        type: Sequelize.INTEGER,
        unique: 'item_tag_taggable',
        references: null,
    },
});

const Post = db.define('post', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT,
});

const Tag = db.define('tag', {
    name: Sequelize.STRING,
});

Post.belongsToMany(Tag, {
    through: {
        model: ItemTag,
        unique: false,
        scope: {
            taggable: 'post',
        },
    },
    foreignKey: 'taggable_id',
    constraints: false,
});

Tag.belongsToMany(Post, {
    through: {
        model: ItemTag,
        unique: false,
    },
    foreignKey: 'tag_id',
    constraints: false,
});

const createTable = async () => {
    await Post.sync();
    await Tag.sync();
    await ItemTag.sync();
};
createTable();
