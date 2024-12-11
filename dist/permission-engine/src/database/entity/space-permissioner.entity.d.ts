import { Space } from './space.entity';
import { User } from './user.entity';
import { PermissionResponse } from './permission-response.entity';
import { SpaceHistory } from './space-history.entity';
export declare class SpacePermissioner {
    id: string;
    space: Space;
    spaceId: string;
    user: User;
    userId: string;
    inviter: User;
    inviterId: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    permissionResponses: PermissionResponse[];
    spaceHistories: SpaceHistory[];
}
