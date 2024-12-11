import { PermissionResponseStatus } from '../../../lib/type';
import { PaginationDto } from '../../../lib/dto';
export declare class FindAllPermissionResponseDto extends PaginationDto {
    permissionRequestId?: string;
    spacePermissionerIds?: string[];
    statuses?: PermissionResponseStatus[];
}
