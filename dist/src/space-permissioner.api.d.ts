import { FindAllSpacePermissionerByUserIdDto, InviteSpacePermissionerDto, JoinSpacePermissionerDto } from "../permission-engine/src/api/space-permissioner/dto";
import { SpacePermissioner } from "../permission-engine/src/database/entity/space-permissioner.entity";
import { PaginationDto } from "../permission-engine/src/lib/dto";
import { ApiClient } from "./api-client";
export declare class SpacePermissionerAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAllBySpaceId(spaceId: string, dto: PaginationDto): Promise<{
        data: SpacePermissioner[];
        total: number;
    }>;
    findSelf(dto: FindAllSpacePermissionerByUserIdDto): Promise<{
        data: SpacePermissioner[];
        total: number;
    }>;
    invite(spaceId: string, dto: InviteSpacePermissionerDto): Promise<SpacePermissioner>;
    join(spaceId: string, dto: JoinSpacePermissionerDto): Promise<SpacePermissioner>;
    leave(spaceId: string): Promise<{
        data: {
            result: boolean;
        };
    }>;
}
