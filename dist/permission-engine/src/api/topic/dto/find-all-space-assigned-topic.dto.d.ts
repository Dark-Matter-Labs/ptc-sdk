import { PaginationDto } from '../../../lib/dto';
export declare class FindAllSpaceAssignedTopicDto extends PaginationDto {
    country?: string;
    region?: string;
    city?: string;
    isActive?: boolean;
}
