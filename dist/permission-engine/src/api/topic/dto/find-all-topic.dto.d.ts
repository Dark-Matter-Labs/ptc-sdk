import { PaginationDto } from '../../../lib/dto';
export declare class FindAllTopicDto extends PaginationDto {
    ids?: string[];
    names?: string[];
    country?: string;
    region?: string;
    city?: string;
    isActive?: boolean;
}
