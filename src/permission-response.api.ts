import {
  ApprovePermissionResponseDto,
  FindAllPermissionResponseDto,
  RejectPermissionResponseDto,
  UpdatePermissionResponseDto,
} from "../permission-engine/src/api/permission-response/dto";
import { ApiClient } from "./api-client";
import { PermissionResponse } from "../permission-engine/src/database/entity/permission-response.entity";

export class PermissionResponseAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(
    dto: FindAllPermissionResponseDto
  ): Promise<{ data: PermissionResponse[]; total: number }> {
    return this.apiClient.get<{ data: PermissionResponse[]; total: number }>(
      `/permission/response`,
      {},
      dto
    );
  }

  async findAllSelfResponse(
    dto: FindAllPermissionResponseDto
  ): Promise<{ data: PermissionResponse[]; total: number }> {
    return this.apiClient.get<{ data: PermissionResponse[]; total: number }>(
      `/permission/response/self`,
      {},
      dto
    );
  }

  async findOneById(id: string) {
    return this.apiClient.get<PermissionResponse>(`/permission/response/:id`, {
      id,
    });
  }

  async approve(id: string, dto: ApprovePermissionResponseDto) {
    return this.apiClient.post<ApprovePermissionResponseDto, PermissionResponse>(
      `/permission/response/:id/approve`,
      { id },
      dto
    );
  }

  async reject(id: string, dto: RejectPermissionResponseDto) {
    return this.apiClient.post<RejectPermissionResponseDto, PermissionResponse>(
      `/permission/response/:id/reject`,
      { id },
      dto
    );
  }

  async abstention(id: string, dto: UpdatePermissionResponseDto) {
    return this.apiClient.post<UpdatePermissionResponseDto, PermissionResponse>(
      `/permission/response/:id/abstention`,
      { id },
      dto
    );
  }
}
