import { PaginationDto } from '../../../lib/dto';
export declare class FindAllSpaceDto extends PaginationDto {
    ownerId?: string;
    ruleId?: string;
    topicIds?: string[];
    name?: string;
    timezone?: string;
    country?: string;
    region?: string;
    city?: string;
    district?: string;
    address?: string;
    geometry?: number[];
}
