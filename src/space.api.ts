import {
  FindAllSpaceDto,
  CreateSpaceDto,
  UpdateSpaceDto,
  SetSpaceImageDto,
  ReportSpaceIssueDto,
  VolunteerSpaceIssueResolveDto,
  ResolveSpaceIssueDto,
  FindAllMatchedRuleDto,
  FindSpaceAvailabilityDto,
  MarkIssueResolveVolunteerFullDto,
  AddSpaceHistoryTaskDto,
  ResolveSpaceHistoryTaskDto,
} from "../permission-engine/src/api/space/dto";
import { ApiClient } from "./api-client";
import { Space } from "../permission-engine/src/database/entity/space.entity";
import {
  SpaceAvailability,
  SpaceImageType,
} from "../permission-engine/src/lib/type";
import { SpaceImage } from "../permission-engine/src/database/entity/space-image.entity";
import { SpaceHistory } from "../permission-engine/src/database/entity/space-history.entity";
import { SpaceHistoryTask } from "permission-engine/src/database/entity/space-history-task.entity";

export class SpaceAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(
    dto: FindAllSpaceDto
  ): Promise<{ data: Space[]; total: number }> {
    return this.apiClient.get<{ data: Space[]; total: number }>(
      `/space`,
      {},
      dto
    );
  }

  async findOneById(id: string) {
    return this.apiClient.get<Space>(`/space/:id`, {
      id,
    });
  }

  async findAllMatched(dto: FindAllMatchedRuleDto) {
    return this.apiClient.get<{ data: Space[]; total: number }>(
      `/space/matched-rule`,
      {},
      dto
    );
  }

  async findAvailabilityById(id: string, dto: FindSpaceAvailabilityDto) {
    return this.apiClient.get<{ data: SpaceAvailability[] }>(
      `/space/:id/availability`,
      { id },
      dto
    );
  }

  async create(dto: CreateSpaceDto) {
    return this.apiClient.post<CreateSpaceDto, Space>(`/space`, {}, dto);
  }

  async update(id: string, dto: UpdateSpaceDto) {
    return this.apiClient.put<UpdateSpaceDto, Space>(`/space/:id`, { id }, dto);
  }

  async setImage(id: string, type: SpaceImageType, dto: SetSpaceImageDto) {
    return this.apiClient.post<SetSpaceImageDto, SpaceImage>(
      `/space/:id/image/:type`,
      { id, type },
      dto
    );
  }

  async addTopic(id: string, topicId: string) {
    return this.apiClient.put<null, { data: { result: boolean } }>(
      `/space/:id/topic/add/:topicId`,
      { id, topicId },
      {}
    );
  }

  async removeTopic(id: string, topicId: string) {
    return this.apiClient.put<null, { data: { result: boolean } }>(
      `/space/:id/topic/remove/:topicId`,
      { id, topicId },
      {}
    );
  }

  async reportIssue(id: string, dto: ReportSpaceIssueDto) {
    return this.apiClient.post<ReportSpaceIssueDto, SpaceHistory>(
      `/space/:id/issue/report`,
      { id },
      dto
    );
  }

  async volunteerIssueResolve(id: string, dto: VolunteerSpaceIssueResolveDto) {
    return this.apiClient.post<VolunteerSpaceIssueResolveDto, SpaceHistory>(
      `/space/:id/issue/volunteer`,
      { id },
      dto
    );
  }

  async markIssueResolveVolunteerFull(
    id: string,
    dto: MarkIssueResolveVolunteerFullDto
  ) {
    return this.apiClient.post<MarkIssueResolveVolunteerFullDto, SpaceHistory>(
      `/space/:id/issue/volunteer/full`,
      { id },
      dto
    );
  }

  async resolveIssue(id: string, dto: ResolveSpaceIssueDto) {
    return this.apiClient.post<ResolveSpaceIssueDto, SpaceHistory>(
      `/space/:id/issue/resolve`,
      { id },
      dto
    );
  }

  async addSpaceHistoryTask(
    id: string,
    spaceHistoryId: string,
    dto: AddSpaceHistoryTaskDto
  ) {
    return this.apiClient.post<AddSpaceHistoryTaskDto, SpaceHistoryTask>(
      `/space/:id/issue/:spaceHistoryId/task`,
      { id, spaceHistoryId },
      dto
    );
  }

  async resolveSpaceHistoryTask(
    id: string,
    spaceHistoryId: string,
    spaceHistoryTaskId: string,
    dto: ResolveSpaceHistoryTaskDto
  ) {
    return this.apiClient.post<
      ResolveSpaceHistoryTaskDto,
      { data: { result: boolean } }
    >(
      `:id/issue/:spaceHistoryId/task/:spaceHistoryTaskId/resolve`,
      { id, spaceHistoryId, spaceHistoryTaskId },
      dto
    );
  }
}
