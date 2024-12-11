import { PermissionRequest } from './permission-request.entity';
import { SpacePermissioner } from './space-permissioner.entity';
import { PermissionResponseStatus } from '../../lib/type';
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
    timeoutAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
