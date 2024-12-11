import { PaginationDto } from '../../../lib/dto';
import { SpaceHistoryType } from '../../../lib/type';
export declare class FindAllSpaceHistoryDto extends PaginationDto {
    isPublic?: boolean;
    spaceId: string;
    spaceEventId?: string;
    types?: SpaceHistoryType[];
}
