import {
  FindAllSpacePermissionerByUserIdDto,
  InviteSpacePermissionerDto,
} from "permission-engine/src/api/space-permissioner/dto";
import { SpacePermissioner } from "permission-engine/src/database/entity/space-permissioner.entity";
import { PaginationDto } from "permission-engine/src/lib/dto";
import { ApiClient } from "./api-client";

export class SpacePermissionerAPI {
  constructor(private apiClient: ApiClient) {}

  async findAllBySpaceId(
    spaceId: string,
    dto: PaginationDto
  ): Promise<{ data: SpacePermissioner[]; total: number }> {
    return this.apiClient.get<{ data: SpacePermissioner[]; total: number }>(
      `/permissioner/:spaceId`,
      { spaceId },
      dto
    );
  }

  async findSelf(dto: FindAllSpacePermissionerByUserIdDto) {
    return this.apiClient.get<SpacePermissioner>(`/permissioner/self`, {}, dto);
  }

  async invite(
    spaceId: string,
    dto: InviteSpacePermissionerDto
  ): Promise<SpacePermissioner> {
    return this.apiClient.post<InviteSpacePermissionerDto, SpacePermissioner>(
      `/permissioner/:spaceId/invite`,
      { spaceId },
      dto
    );
  }

  async join(spaceId: string): Promise<SpacePermissioner> {
    return this.apiClient.post<null, SpacePermissioner>(
      `/permissioner/:spaceId/join`,
      { spaceId }
    );
  }

  async leave(spaceId: string): Promise<{ data: { result: boolean } }> {
    return this.apiClient.post<null, { data: { result: boolean } }>(
      `/permissioner/:spaceId/leave`,
      { spaceId }
    );
  }
}
