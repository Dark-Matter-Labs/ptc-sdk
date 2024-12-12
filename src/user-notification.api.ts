import { ApiClient } from "./api-client";
import { FindAllUserNotificationDto } from "../permission-engine/src/api/user-notification/dto";
import { UserNotification } from "../permission-engine/src/database/entity/user-notification.entity";

export class UserNotificationAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(dto: FindAllUserNotificationDto) {
    return this.apiClient.get<UserNotification>(`/user/notification`, {}, dto);
  }

  async findOneById(id: string) {
    return this.apiClient.get<UserNotification>(`/user/notification/:id`, { id });
  }

  async complete(id: string) {
    return this.apiClient.put<null, UserNotification>(`/user/notification/:id`, { id });
  }
}
