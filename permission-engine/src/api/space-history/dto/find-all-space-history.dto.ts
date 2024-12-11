import {
  IsOptional,
  IsUUID,
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsArray,
} from 'class-validator';
import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import { PaginationDto } from '../../../lib/dto';
import { SpaceHistoryType } from '../../../lib/type';
import { Transform } from 'class-transformer';

export class FindAllSpaceHistoryDto extends PaginationDto {
  @IsOptional()
  @IsBoolean()
  @ApiHideProperty()
  isPublic?: boolean;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'SpaceHistory spaceId in uuid',
    type: String,
  })
  spaceId: string;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({
    description: 'SpaceHistory spaceEventId in uuid',
    type: String,
  })
  spaceEventId?: string;

  @IsOptional()
  @Transform(({ value }) => (Array.isArray(value) ? value : value.split(',')))
  @IsArray()
  @IsString({ each: true })
  @ApiPropertyOptional({
    description: 'SpaceHistory type',
  })
  types?: SpaceHistoryType[];
}
