import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PaginationDto } from '../../../lib/dto';

export class FindAllSpacePermissionerByUserIdDto extends PaginationDto {
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Is SpacePermissioner active',
    type: Boolean,
  })
  isActive?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'SpacePermissioner spaceId',
    type: 'string',
  })
  spaceId?: string;
}
