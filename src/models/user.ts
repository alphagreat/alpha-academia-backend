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

@Table({
  timestamps: true,
  paranoid: true
})
class User extends Model<User> {
  @Column(DataType.UUID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  id: string;

  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @Column({ allowNull: false })
  otherNames: string;

  @Column({ allowNull: false })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ allowNull: false })
  @Default(0)
  status: number;

  @HasOne(() => Bio, 'userId')
  bio: Bio;
}

export default User;
