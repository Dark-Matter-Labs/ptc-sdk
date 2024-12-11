import { SpaceHistoryType } from '../../../lib/type';
export declare class CreateSpaceHistoryDto {
    spaceId: string;
    ruleId: string;
    loggerId?: string;
    spaceHistoryId?: string;
    spacePermissionerId?: string;
    spaceEventId?: string;
    permissionRequestId?: string;
    isPublic: boolean;
    type: SpaceHistoryType;
    title?: string;
    details?: string;
    image?: string;
}
