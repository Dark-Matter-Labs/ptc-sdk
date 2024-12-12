import {
  FindAllRuleBlockDto,
  CreateRuleBlockDto,
} from "../permission-engine/src/api/rule-block/dto";
import { RuleBlock } from "../permission-engine/src/database/entity/rule-block.entity";
import { ApiClient } from "./api-client";

export class RuleBlockAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(
    dto: FindAllRuleBlockDto
  ): Promise<{ data: RuleBlock[]; total: number }> {
    return this.apiClient.get<{ data: RuleBlock[]; total: number }>(
      `/rule/block`,
      {},
      dto
    );
  }

  async findOneById(id: string) {
    return this.apiClient.get<RuleBlock>(`/rule/block/:id`, {
      id,
    });
  }

  async findOneByHash(hash: string) {
    return this.apiClient.get<RuleBlock>(`/rule/block/hash/:hash`, {
      hash,
    });
  }

  async create(dto: CreateRuleBlockDto) {
    return this.apiClient.post<CreateRuleBlockDto, RuleBlock>(
      `/rule/block`,
      {},
      dto
    );
  }
}
