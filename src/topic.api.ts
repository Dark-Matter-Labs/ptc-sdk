import { FindAllTopicDto } from "../permission-engine/src/api/topic/dto";
import { Topic } from "../permission-engine/src/database/entity/topic.entity";
import { ApiClient } from "./api-client";

export class TopicAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(
    dto: FindAllTopicDto
  ): Promise<{ data: Topic[]; total: number }> {
    return this.apiClient.get<{ data: Topic[]; total: number }>(
      `/topic`,
      {},
      dto
    );
  }

  async findAllSpaceAssigned(
    dto: FindAllTopicDto
  ): Promise<{ data: Topic[]; total: number }> {
    return this.apiClient.get<{ data: Topic[]; total: number }>(
      `/topic/space`,
      {},
      dto
    );
  }

  async findAllBySpaceId(
    spaceId: string
  ): Promise<{ data: Topic[]; total: number }> {
    return this.apiClient.get<{ data: Topic[]; total: number }>(
      `/topic/space/:spaceId`,
      { spaceId }
    );
  }

  async findAllBySpaceEventId(
    spaceEventId: string
  ): Promise<{ data: Topic[]; total: number }> {
    return this.apiClient.get<{ data: Topic[]; total: number }>(
      `/topic/event/:spaceEventId`,
      { spaceEventId }
    );
  }

  async findAllByRuleId(
    ruleId: string
  ): Promise<{ data: Topic[]; total: number }> {
    return this.apiClient.get<{ data: Topic[]; total: number }>(
      `/topic/rule/:ruleId`,
      { ruleId }
    );
  }

  async findOneById(id: string): Promise<Topic> {
    return this.apiClient.get<Topic>(`/topic/:id`, {
      id,
    });
  }
}
