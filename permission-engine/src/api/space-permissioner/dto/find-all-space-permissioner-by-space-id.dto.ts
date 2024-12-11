import { IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PaginationDto } from '../../../lib/dto';

export class FindAllSpacePermissionerBySpaceIdDto extends PaginationDto {
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Is SpacePermissioner active',
    type: Boolean,
  })
  isActive?: boolean;
}
