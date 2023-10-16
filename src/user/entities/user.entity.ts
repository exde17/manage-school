import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@Entity({
  name: 'users',
  schema: 'security',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
    name: 'first_name',
  })
  firstName: string;

  @Column('text', {
    nullable: false,
    name: 'last_name',
  })
  lastName: string;

  @Column('text', {
    nullable: false,
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column('text', {
    nullable: false,
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Column('bool', {
    name: 'is_active',
    default: true,
  })
  isActive: boolean;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updatedAt: Date;
}
