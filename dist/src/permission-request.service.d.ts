import { FindAllPermissionRequestDto, CreateSpaceEventRulePreApprovePermissionRequestDto, CreateSpaceRuleChangePermissionRequestDto, CreateSpaceEventPermissionRequestDto, CancelPermissionRequestDto, DropPermissionRequestDto } from "../permission-engine/src/api/permission-request/dto";
import { ApiClient } from "./api-client";
import { PermissionRequest } from "../permission-engine/src/database/entity/permission-request.entity";
export declare class PermissionRequestService {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllPermissionRequestDto): Promise<{
        data: PermissionRequest[];
        total: number;
    }>;
    findOneByPermissionCode(permissionCode: string): Promise<PermissionRequest>;
    findOne(id: string): Promise<PermissionRequest>;
    spaceEventRulePreApprovePermissionRequest(dto: CreateSpaceEventRulePreApprovePermissionRequestDto): Promise<PermissionRequest>;
    spaceRuleChangePermissionRequest(dto: CreateSpaceRuleChangePermissionRequestDto): Promise<PermissionRequest>;
    spaceEventPermissionRequest(dto: CreateSpaceEventPermissionRequestDto): Promise<PermissionRequest>;
    cancel(id: string, dto: CancelPermissionRequestDto): Promise<PermissionRequest>;
    accept(id: string): Promise<PermissionRequest>;
    drop(id: string, dto: DropPermissionRequestDto): Promise<PermissionRequest>;
}
