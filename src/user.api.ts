import { UpdateUserDto } from "../permission-engine/src/api/user/dto";
import { ApiClient } from "./api-client";
import { User } from "../permission-engine/src/database/entity/user.entity";

export class UserAPI {
  constructor(private apiClient: ApiClient) {}

  async findSelf() {
    return this.apiClient.get<User>(`/user/me`);
  }

  async findPublicData(id: string) {
    return this.apiClient.get<User>(`/user/:id`, { id });
  }

  async updateSelf(dto: UpdateUserDto) {
    return this.apiClient.put<UpdateUserDto, User>(`/user`, {}, dto);
  }

  async addTopic(topicId: string) {
    return this.apiClient.put<UpdateUserDto, User>(`/user/topic/add/:topicId`, {
      topicId,
    });
  }

  async removeTopic(topicId: string) {
    return this.apiClient.put<UpdateUserDto, User>(
      `/user/topic/remove/:topicId`,
      {
        topicId,
      }
    );
  }
}
