import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  CreateDateColumn,
} from 'typeorm';
import { SpaceEvent } from './space-event.entity';
import { Topic } from './topic.entity';

@Entity()
export class RuleHistory {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'uuid' })
  id: string;

  @Column()
  @ApiProperty({ description: 'Space name' })
  name: string;

  @Column()
  @ApiProperty({ description: 'Space owner userId in uuid' })
  ownerId: string;

  @Column()
  @ApiProperty({ description: 'Space zipcode' })
  zipcode: number;

  @Column()
  @ApiProperty({ description: 'Country' })
  country: string;

  @Column()
  @ApiProperty({ description: 'State|Region' })
  region: string;

  @Column()
  @ApiProperty({ description: 'City' })
  city: string;

  @Column()
  @ApiProperty({ description: 'District' })
  district: string;

  @Column()
  @ApiProperty({ description: 'Address' })
  address: string;

  @Column()
  @ApiProperty({ description: 'Latitude in string' })
  latitude: string;

  @Column()
  @ApiProperty({ description: 'Longitude in string' })
  longitude: string;

  @Column({ default: true })
  @ApiProperty({ description: 'Is space active' })
  isActive: boolean;

  @Column()
  @ApiProperty({ description: 'Space rule ruleId in uuid' })
  ruleId: string;

  @Column()
  @ApiProperty({
    description: 'Space consent condition: {under|over|is}_{percent}_{yes|no}',
  })
  consentCondition: string;

  @Column()
  @ApiProperty({ description: 'Space description' })
  details: string;

  @CreateDateColumn()
  @ApiProperty({ description: 'Created timestamp' })
  createdAt: Date;

  @Column()
  @ApiProperty({ description: 'Updated timestamp' })
  updatedAt: Date;

  @OneToMany(() => SpaceEvent, (spaceEvent) => spaceEvent.organizer)
  spaceEvents: SpaceEvent[];

  @ManyToMany(() => Topic, (topic) => topic.spaceTopics)
  topics: Topic[];
}
