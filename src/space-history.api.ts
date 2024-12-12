import { FindAllSpaceHistoryDto, FindAllIssueSpaceHistoryDto } from "permission-engine/src/api/space-history/dto";
import { SpaceHistory } from "permission-engine/src/database/entity/space-history.entity";
import { ApiClient } from "./api-client";

export class SpaceHistoryAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(
    dto: FindAllSpaceHistoryDto
  ): Promise<{ data: SpaceHistory[]; total: number }> {
    return this.apiClient.get<{ data: SpaceHistory[]; total: number }>(
      `/space/history`,
      {},
      dto
    );
  }

  async findOneById(id: string) {
    return this.apiClient.get<SpaceHistory>(`/space/history/:id`, {
      id,
    });
  }

  async findAllIssue(dto: FindAllIssueSpaceHistoryDto) {
    return this.apiClient.get<{ data: SpaceHistory[]; total: number }>(
      `/space/history/issue`,
      {},
      dto
    );
  }

  async findAllUnresolvedIssue(dto: FindAllIssueSpaceHistoryDto) {
    return this.apiClient.get<{ data: SpaceHistory[]; total: number }>(
      `/space/history/issue/unresolved`,
      {},
      dto
    );
  }
}
