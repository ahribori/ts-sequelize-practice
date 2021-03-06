import { sequelize } from './db-ts';

import { Person, Hobby } from './models';

sequelize.addModels([Person, Hobby]);

// Person.create({ name: 'Daniel', birthday: new Date() })
// Hobby.create({ name: '코딩', personId: 1});

Person.find({
    where: {
        name: 'Daniel2',
    },
    include: [Hobby],
}).then(results => {
    console.log(results.dataValues);
    results.update({
        name: 'Daniel3',
    }).then((result) => {
        console.log(result.dataValues);
    });
});

import { User, Project } from './examples/oneToMany';

// const initialize = () => {
//     db.getQueryInterface().dropAllTables().then(() => {
//         require('./examples/oneToOne');
//         require('./examples/oneToMany');
//         require('./examples/manyToMany');
//     });
// };

// initialize();

// Project.create({ name: 'Java 프로젝트' });
// User.create({ name: '정현승', age: 30, projectId: 1 });
//
// Project.find({
//     raw: true,
//     include: [
//         { model: User }
//     ],
// }).then((results: any) => {
//     console.log(results);
// });
