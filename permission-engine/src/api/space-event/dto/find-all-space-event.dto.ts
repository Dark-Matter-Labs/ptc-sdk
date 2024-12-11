import {
  IsArray,
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { SpaceEventStatus, SpaceEventRuleSortBy } from '../../../lib/type';
import { PaginationDto } from '../../../lib/dto';
import { Transform } from 'class-transformer';

export class FindAllSpaceEventDto extends PaginationDto {
  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({
    description: 'SpaceEvent organizer userId in uuid',
    type: String,
  })
  organizerId?: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({
    description: 'SpaceEvent spaceId in uuid',
    type: String,
  })
  spaceId?: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({
    description: 'SpaceEvent ruleId in uuid',
    type: String,
  })
  ruleId?: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({
    description: 'SpaceEvent externalServiceId in uuid',
    type: String,
  })
  externalServiceId?: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({
    description: 'SpaceEvent permissionRequestId in uuid',
    type: String,
  })
  permissionRequestId?: string;

  @IsOptional()
  @Transform(({ value }) => (Array.isArray(value) ? value : value.split(',')))
  @IsArray()
  @IsString({ each: true })
  @ApiPropertyOptional({
    description: 'SpaceEvent statuses',
  })
  statuses?: SpaceEventStatus[];

  @IsOptional()
  @Transform(({ value }) => (Array.isArray(value) ? value : value.split(',')))
  @IsArray()
  @IsUUID('4', { each: true })
  @ApiPropertyOptional({
    description: 'SpaceEvent topicIds in uuid',
  })
  topicIds?: string[];

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({
    description: 'SpaceEvent startsAfter date',
  })
  startsAfter?: Date;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({
    description: 'SpaceEvent endsBefore date',
  })
  endsBefore?: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'SpaceEvent name',
    type: String,
  })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: `SpaceApprovedRule sort by: ${[
      SpaceEventRuleSortBy.timeAsc,
      SpaceEventRuleSortBy.timeDesc,
      SpaceEventRuleSortBy.startsAtAsc,
      SpaceEventRuleSortBy.startsAtDesc,
      SpaceEventRuleSortBy.endsAtAsc,
      SpaceEventRuleSortBy.endsAtDesc,
    ].join('|')}`,
    type: 'string',
  })
  sortBy?: SpaceEventRuleSortBy = SpaceEventRuleSortBy.startsAtAsc;
}
