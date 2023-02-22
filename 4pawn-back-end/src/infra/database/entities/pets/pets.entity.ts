import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  IsUUID,
} from 'sequelize-typescript';

@Table({ timestamps: false })
export class Pets extends Model<Pets> {
  @AllowNull(false)
  @IsUUID('all')
  @Column({ primaryKey: true, type: DataType.STRING })
  id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  age: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  image: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  weight: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  color: string;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  adopted: boolean;
}
