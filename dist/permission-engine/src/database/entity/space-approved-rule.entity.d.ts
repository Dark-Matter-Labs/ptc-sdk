import { Space } from './space.entity';
import { Rule } from './rule.entity';
import { PermissionRequest } from './permission-request.entity';
export declare class SpaceApprovedRule {
    space: Space;
    spaceId: string;
    rule: Rule;
    ruleId: string;
    permissionRequest: PermissionRequest;
    permissionRequestId: string;
    publicHash: string;
    isActive: boolean;
    isPublic: boolean;
    utilizationCount: number;
    createdAt: Date;
    updatedAt: Date;
}
