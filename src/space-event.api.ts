import {
  FindAllSpaceEventDto,
  CreateSpaceEventDto,
  UpdateSpaceEventDto,
  CompleteSpaceEventDto,
  CompleteWithIssueResolvedSpaceEventDto,
  CompleteWithIssueSpaceEventDto,
  SetSpaceEventImageDto,
  UpdateSpaceEventAdditionalInfoDto,
  UpdateSpaceEventReportDto,
} from "../permission-engine/src/api/space-event/dto";
import { SpaceEvent } from "../permission-engine/src/database/entity/space-event.entity";
import { ApiClient } from "./api-client";
import { RuleBlock } from "../permission-engine/src/database/entity/rule-block.entity";
import { SpaceHistory } from "../permission-engine/src/database/entity/space-history.entity";
import { SpaceEventImage } from "../permission-engine/src/database/entity/space-event-image.entity";
import { SpaceEventImageType } from "../permission-engine/src/lib/type";

export class SpaceEventAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(
    dto: FindAllSpaceEventDto
  ): Promise<{ data: SpaceEvent[]; total: number }> {
    return this.apiClient.get<{ data: SpaceEvent[]; total: number }>(
      `/event`,
      {},
      dto
    );
  }

  async findReportQuestions(): Promise<{
    spaceSuitability: string;
    spaceSatisfaction: string;
    eventGoal: string;
    spaceIssue: string;
    spaceSuggestions: string;
  }> {
    return this.apiClient.get<{
      spaceSuitability: string;
      spaceSatisfaction: string;
      eventGoal: string;
      spaceIssue: string;
      spaceSuggestions: string;
    }>(`/event/report`);
  }

  async findOneById(id: string) {
    return this.apiClient.get<SpaceEvent>(`/event/:id`, {
      id,
    });
  }

  async create(dto: CreateSpaceEventDto) {
    return this.apiClient.post<CreateSpaceEventDto, SpaceEvent>(
      `/event`,
      {},
      dto
    );
  }

  async update(id: string, dto: UpdateSpaceEventDto) {
    return this.apiClient.put<UpdateSpaceEventDto, SpaceEvent>(
      `/event/:id`,
      { id },
      dto
    );
  }

  async setImage(
    id: string,
    type: SpaceEventImageType,
    dto: SetSpaceEventImageDto
  ) {
    return this.apiClient.post<SetSpaceEventImageDto, SpaceEventImage>(
      `/event/:id/image/:type`,
      { id, type },
      dto
    );
  }

  async updateAdditionalInfo(
    id: string,
    dto: UpdateSpaceEventAdditionalInfoDto
  ) {
    return this.apiClient.put<
      UpdateSpaceEventAdditionalInfoDto,
      { data: { result: boolean } }
    >(`/event/:id/additional-info`, { id }, dto);
  }

  async updateReport(id: string, dto: UpdateSpaceEventReportDto) {
    return this.apiClient.put<
      UpdateSpaceEventReportDto,
      { data: { result: boolean } }
    >(`/event/:id/report`, { id }, dto);
  }

  async run(id: string) {
    return this.apiClient.put<null, { data: { result: boolean } }>(
      `/event/:id/run`,
      { id }
    );
  }

  async cancel(id: string) {
    return this.apiClient.put<null, { data: { result: boolean } }>(
      `/event/:id/cancel`,
      { id }
    );
  }

  async findPostEventCheckRuleBlocks(id: string) {
    return this.apiClient.get<RuleBlock[]>(`/event/:id/complete`, { id });
  }

  async complete(id: string, dto: CompleteSpaceEventDto) {
    return this.apiClient.put<
      null,
      { data: { result: boolean; addedSpaceEventImageIds: string[] } }
    >(`/event/:id/complete`, { id }, dto);
  }

  async completeWithIssue(id: string, dto: CompleteWithIssueSpaceEventDto) {
    return this.apiClient.put<
      null,
      {
        data: {
          result: boolean;
          addedSpaceEventImageIds: string[];
          spaceHistory: SpaceHistory;
        };
      }
    >(`/event/:id/complete/issue`, { id }, dto);
  }

  async completeWithIssueResolved(
    id: string,
    dto: CompleteWithIssueResolvedSpaceEventDto
  ) {
    return this.apiClient.put<
      null,
      {
        data: {
          result: boolean;
          addedSpaceEventImageIds: string[];
          spaceHistories: SpaceHistory[];
        };
      }
    >(`/event/:id/complete/issue/resolve`, { id }, dto);
  }
}
