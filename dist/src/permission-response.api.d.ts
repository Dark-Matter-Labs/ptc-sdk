import { ApprovePermissionResponseDto, FindAllPermissionResponseDto, RejectPermissionResponseDto, UpdatePermissionResponseDto } from "../permission-engine/src/api/permission-response/dto";
import { ApiClient } from "./api-client";
import { PermissionResponse } from "../permission-engine/src/database/entity/permission-response.entity";
export declare class PermissionResponseAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllPermissionResponseDto): Promise<{
        data: PermissionResponse[];
        total: number;
    }>;
    findAllSelfResponse(dto: FindAllPermissionResponseDto): Promise<{
        data: PermissionResponse[];
        total: number;
    }>;
    findOneById(id: string): Promise<PermissionResponse>;
    approve(id: string, dto: ApprovePermissionResponseDto): Promise<PermissionResponse>;
    reject(id: string, dto: RejectPermissionResponseDto): Promise<PermissionResponse>;
    abstention(id: string, dto: UpdatePermissionResponseDto): Promise<PermissionResponse>;
}
