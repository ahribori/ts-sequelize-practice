import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Hobby } from './Hobby';

@Table
export class Person extends Model<Person> {

    @Column
    name: string;

    @Column
    birthday: Date;

    @HasMany(() => Hobby)
    hobbies: Hobby[];
}
