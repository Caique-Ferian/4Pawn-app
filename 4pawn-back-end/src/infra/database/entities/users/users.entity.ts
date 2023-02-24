import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  IsUUID,
} from 'sequelize-typescript';

@Table({ timestamps: false })
export class Users extends Model<Users> {
  @AllowNull(false)
  @IsUUID('all')
  @Column({ primaryKey: true, type: DataType.STRING })
  id: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING, field: 'full_name' })
  fullName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  role: string;
}
