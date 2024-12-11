import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SpaceEquipmentType } from '../../../lib/type';
import { PaginationDto } from '../../../lib/dto';
import { Transform } from 'class-transformer';

export class FindAllSpaceEquipmentDto extends PaginationDto {
  @IsUUID()
  @ApiProperty({
    description: 'SpaceEquipment spaceId in uuid',
    type: String,
  })
  spaceId: string;

  @IsOptional()
  @Transform(({ value }) => (Array.isArray(value) ? value : value.split(',')))
  @IsArray()
  @IsString({ each: true })
  @ApiPropertyOptional({
    description: 'SpaceEquipment types',
  })
  types?: SpaceEquipmentType[];

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({
    description: 'SpaceEquipment active state',
    type: 'boolean',
  })
  isActive?: boolean;
}
