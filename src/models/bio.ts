import {
  Model,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  PrimaryKey,
  Table
} from 'sequelize-typescript';

import User from './user';

@Table({ timestamps: true })
class Bio extends Model<Bio> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
  id: string;

  @Column
  countryOfBirth: string;

  @Column
  currentNationality: string;

  @Column
  gender: number;

  @Column
  dateOfBirth: Date;

  @Column
  placeOfResidence: string;

  @Column
  imageUrl: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId: string;

  @BelongsTo(() => User)
  user: User;
}

export default Bio;
