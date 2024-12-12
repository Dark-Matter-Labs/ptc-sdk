import { Rule } from "../permission-engine/src/database/entity/rule.entity";
import { ApiClient } from "./api-client";
import {
  CreateRuleDto,
  FindAllRuleDto,
  ForkRuleDto,
  UpdateRuleDto,
} from "../permission-engine/src/api/rule/dto";

export class RuleAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(dto: FindAllRuleDto): Promise<{ data: Rule[]; total: number }> {
    return this.apiClient.get<{ data: Rule[]; total: number }>(
      `/rule`,
      {},
      dto
    );
  }

  async findOneById(id: string) {
    return this.apiClient.get<Rule>(`/rule/:id`, {
      id,
    });
  }

  async findOneBySpaceId(spaceId: string) {
    return this.apiClient.get<Rule>(`/rule/space/:spaceId`, {
      spaceId,
    });
  }

  async create(dto: CreateRuleDto) {
    return this.apiClient.post<CreateRuleDto, Rule>(`/rule`, {}, dto);
  }

  async fork(id: string, dto: ForkRuleDto) {
    return this.apiClient.post<ForkRuleDto, Rule>(
      `/rule/:id/fork`,
      { id },
      dto
    );
  }

  async archiveAndUpdate(id: string, dto: UpdateRuleDto) {
    return this.apiClient.put<UpdateRuleDto, Rule>(`/rule/:id`, { id }, dto);
  }
}
