import { IsArray, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { UserNotificationStatus } from '../../../lib/type';
import { PaginationDto } from '../../../lib/dto';
import { Transform } from 'class-transformer';

export class FindAllUserNotificationDto extends PaginationDto {
  @IsOptional()
  @Transform(({ value }) => (Array.isArray(value) ? value : value.split(',')))
  @IsArray()
  @IsString({ each: true })
  @ApiPropertyOptional({
    description: 'UserNotification statuses',
  })
  statuses?: UserNotificationStatus[];
}
