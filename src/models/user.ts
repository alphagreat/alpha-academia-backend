import { Optional } from 'sequelize';

import {
  Table,
  Model,
  DataType,
  Column,
  PrimaryKey,
  Default,
  HasOne
} from 'sequelize-typescript';

import Bio from './bio';

interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  otherNames: string;
  email: string;
  password: string;
  status: number;
}

interface CreateUserAttributes
  extends Optional<UserAttributes, 'id' | 'otherNames'> {}

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true
})
class User extends Model<UserAttributes, CreateUserAttributes> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @Column
  otherNames: string;

  @Column({ allowNull: false })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Default(0)
  @Column({ allowNull: false })
  status: number;

  @Column({ allowNull: false, type: DataType.INTEGER })
  userTypeId: number;

  @HasOne(() => Bio, 'userId')
  bio: Bio;
}

export default User;
