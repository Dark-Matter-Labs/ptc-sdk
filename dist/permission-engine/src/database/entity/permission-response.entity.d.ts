import { PermissionRequest } from './permission-request.entity';
import { SpacePermissioner } from './space-permissioner.entity';
import { PermissionResponseStatus, PermissionResponseVoteHistoryItem } from '../../lib/type';
export declare class PermissionResponse {
    id: string;
    permissionRequest: PermissionRequest;
    permissionRequestId: string;
    spacePermissioner: SpacePermissioner;
    spacePermissionerId: string;
    status: PermissionResponseStatus;
    conditions: string[];
    excitements: string[];
    worries: string[];
    voteHistory: PermissionResponseVoteHistoryItem[];
    timeoutAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
