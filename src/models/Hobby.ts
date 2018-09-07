import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Person } from './Person';

@Table
export class Hobby extends Model<Hobby> {

    @Column
    name: string;

    @ForeignKey(() => Person)
    @Column
    personId: number;
}
