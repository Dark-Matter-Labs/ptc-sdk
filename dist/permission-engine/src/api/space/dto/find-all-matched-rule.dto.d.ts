import { PaginationDto } from '../../../lib/dto';
export declare class FindAllMatchedRuleDto extends PaginationDto {
    spaceId: string;
    spaceEventExceptions?: string[];
}
