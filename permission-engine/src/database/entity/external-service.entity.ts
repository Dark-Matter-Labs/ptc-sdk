import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { SpaceEvent } from './space-event.entity';

@Entity()
export class ExternalService {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'uuid' })
  id: string;

  @Column()
  @ApiProperty({ description: 'External service name' })
  name: string;

  @ManyToOne(() => User, (user) => user.externalServices)
  @JoinColumn()
  owner: User;

  @Column()
  @ApiProperty({ description: 'External service owner userId in uuid' })
  ownerId: string;

  @Column()
  @ApiProperty({ description: 'External service link' })
  link: string;

  @Column({ default: true })
  @ApiProperty({ description: 'Is space active' })
  isActive: boolean;

  @Column()
  @ApiProperty({ description: 'External service description' })
  details: string;

  @CreateDateColumn()
  @ApiProperty({ description: 'Created timestamp' })
  createdAt: Date;

  @Column()
  @ApiProperty({ description: 'Updated timestamp' })
  updatedAt: Date;

  @OneToMany(() => SpaceEvent, (spaceEvent) => spaceEvent.externalService)
  spaceEvents: SpaceEvent[];
}
