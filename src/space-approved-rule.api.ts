import { ApiClient } from "./api-client";
import { Space } from "permission-engine/src/database/entity/space.entity";
import {
  FindAllSpaceApprovedRuleDto,
  CreateSpaceApprovedRuleDto,
  UpdateSpaceApprovedRuleDto,
} from "permission-engine/src/api/space-approved-rule/dto";
import { SpaceApprovedRule } from "permission-engine/src/database/entity/space-approved-rule.entity";

export class SpaceApprovedRuleAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(
    dto: FindAllSpaceApprovedRuleDto
  ): Promise<{ data: Space[]; total: number }> {
    return this.apiClient.get<{ data: Space[]; total: number }>(
      `/space/approved-rule`,
      {},
      dto
    );
  }

  async create(dto: CreateSpaceApprovedRuleDto) {
    return this.apiClient.post<CreateSpaceApprovedRuleDto, SpaceApprovedRule>(
      `/space/approved-rule`,
      {},
      dto
    );
  }

  async update(dto: UpdateSpaceApprovedRuleDto) {
    return this.apiClient.put<
      UpdateSpaceApprovedRuleDto,
      { data: { result: boolean } }
    >(`/space/approved-rule/:id`, {}, dto);
  }
}
