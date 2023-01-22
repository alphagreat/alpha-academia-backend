import { Optional } from 'sequelize';
import {
  Model,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  PrimaryKey,
  Table,
  AllowNull
} from 'sequelize-typescript';

import User from './user';

interface BioAttributes {
  id: string;
  countryOfBirth: string;
  currentNationality: string;
  gender: number;
  placeOfResidence: string;
  userId: string;
  dateOfBirth: Date;
  imageUrl: string;
}

interface BioCreateAttributes
  extends Optional<
    BioAttributes,
    | 'id'
    | 'countryOfBirth'
    | 'currentNationality'
    | 'gender'
    | 'placeOfResidence'
    | 'imageUrl'
    | 'dateOfBirth'
  > {}

@Table({ timestamps: true, tableName: 'bios', underscored: true })
class Bio extends Model<BioAttributes, BioCreateAttributes> {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column
  countryOfBirth: string;

  @Column
  currentNationality: string;

  @Column
  gender: number;

  @Column
  placeOfResidence: string;

  @Column
  imageUrl: string;

  @Column
  dateOfBirth: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  userId: string;

  @BelongsTo(() => User)
  user: User;
}

export default Bio;
