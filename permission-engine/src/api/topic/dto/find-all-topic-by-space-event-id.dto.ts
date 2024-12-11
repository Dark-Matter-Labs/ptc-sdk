import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from '../../../lib/dto';

export class FindAllTopicBySpaceEventIdDto extends PaginationDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'Topic spaceEventId in uuid',
  })
  spaceEventId: string;
}
