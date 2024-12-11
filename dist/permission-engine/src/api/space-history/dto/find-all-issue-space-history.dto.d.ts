import { PaginationDto } from '../../../lib/dto';
export declare class FindAllIssueSpaceHistoryDto extends PaginationDto {
    isPublic?: boolean;
    spaceId: string;
    spaceEventId?: string;
}
