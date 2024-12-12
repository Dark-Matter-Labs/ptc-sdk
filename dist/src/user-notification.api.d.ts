import { ApiClient } from "./api-client";
import { FindAllUserNotificationDto } from "permission-engine/src/api/user-notification/dto";
import { UserNotification } from "permission-engine/src/database/entity/user-notification.entity";
export declare class UserNotificationAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllUserNotificationDto): Promise<UserNotification>;
    findOneById(id: string): Promise<UserNotification>;
    complete(id: string): Promise<UserNotification>;
}
