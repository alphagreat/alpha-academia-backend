import {
  Table,
  Model,
  DataType,
  Column,
  PrimaryKey,
  Default,
//   HasOne
} from 'sequelize-typescript';

// import Bio from './bio';

@Table({
  timestamps: true,
  paranoid: true,
  underscored: true
})
class User extends Model<User> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
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

  @Default(0)
  @Column({ allowNull: false })
  status: number;

//   @HasOne(() => Bio, 'userId')
//   bio: Bio;
}

export default User;
