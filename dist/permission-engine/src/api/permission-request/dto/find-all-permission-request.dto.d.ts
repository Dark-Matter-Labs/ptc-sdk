import { PermissionRequestResolveStatus, TimeSortBy, PermissionRequestStatus } from '../../../lib/type';
import { PaginationDto } from '../../../lib/dto';
export declare class FindAllPermissionRequestDto extends PaginationDto {
    spaceId?: string;
    spaceEventId?: string;
    ruleId?: string;
    statuses?: PermissionRequestStatus[];
    resolveStatuses?: PermissionRequestResolveStatus[];
    createdBefore?: Date;
    sortBy?: TimeSortBy;
}
