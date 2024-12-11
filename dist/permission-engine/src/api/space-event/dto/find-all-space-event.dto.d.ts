import { SpaceEventStatus, SpaceEventRuleSortBy } from '../../../lib/type';
import { PaginationDto } from '../../../lib/dto';
export declare class FindAllSpaceEventDto extends PaginationDto {
    organizerId?: string;
    spaceId?: string;
    ruleId?: string;
    externalServiceId?: string;
    permissionRequestId?: string;
    statuses?: SpaceEventStatus[];
    topicIds?: string[];
    startsAfter?: Date;
    endsBefore?: Date;
    name?: string;
    sortBy?: SpaceEventRuleSortBy;
}
