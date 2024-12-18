import {
  FindAllPermissionRequestDto,
  CreateSpaceEventRulePreApprovePermissionRequestDto,
  CreateSpaceRuleChangePermissionRequestDto,
  CreateSpaceEventPermissionRequestDto,
  CancelPermissionRequestDto,
  DropPermissionRequestDto,
} from "../permission-engine/src/api/permission-request/dto";
import { ApiClient } from "./api-client";
import { PermissionRequest } from "../permission-engine/src/database/entity/permission-request.entity";

export class PermissionRequestAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(
    dto: FindAllPermissionRequestDto
  ): Promise<{ data: PermissionRequest[]; total: number }> {
    return this.apiClient.get<{ data: PermissionRequest[]; total: number }>(
      `/permission/request`,
      {},
      dto
    );
  }

  async findOneByPermissionCode(permissionCode: string) {
    return this.apiClient.get<PermissionRequest>(
      `/permission/request/code/:permissionCode`,
      {
        permissionCode,
      }
    );
  }

  async findOneById(id: string) {
    return this.apiClient.get<PermissionRequest>(`/permission/request/:id`, {
      id,
    });
  }

  async spaceEventRulePreApprovePermissionRequest(
    dto: CreateSpaceEventRulePreApprovePermissionRequestDto
  ) {
    return this.apiClient.post<
      CreateSpaceEventRulePreApprovePermissionRequestDto,
      { permissionRequest: PermissionRequest; result: boolean }
    >(`/permission/request/pre-approve`, {}, dto);
  }

  async spaceRuleChangePermissionRequest(
    dto: CreateSpaceRuleChangePermissionRequestDto
  ) {
    return this.apiClient.post<
      CreateSpaceRuleChangePermissionRequestDto,
      { permissionRequest: PermissionRequest; result: boolean }
    >(`/permission/request/rule-change`, {}, dto);
  }

  async spaceEventPermissionRequest(dto: CreateSpaceEventPermissionRequestDto) {
    return this.apiClient.post<
      CreateSpaceEventPermissionRequestDto,
      { permissionRequest: PermissionRequest; result: boolean }
    >(`/permission/request/event`, {}, dto);
  }

  async cancel(id: string, dto: CancelPermissionRequestDto) {
    return this.apiClient.put<CancelPermissionRequestDto, PermissionRequest>(
      `/permission/request/:id/cancel`,
      { id },
      dto
    );
  }

  async accept(id: string) {
    return this.apiClient.put<
      CreateSpaceEventPermissionRequestDto,
      PermissionRequest
    >(`/permission/request/:id/accept`, { id });
  }

  async drop(id: string, dto: DropPermissionRequestDto) {
    return this.apiClient.put<DropPermissionRequestDto, PermissionRequest>(
      `/permission/request/:id/drop`,
      { id },
      dto
    );
  }
}
