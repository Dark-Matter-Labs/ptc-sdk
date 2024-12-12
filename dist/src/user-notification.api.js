"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotificationAPI = void 0;
class UserNotificationAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/user/notification`, {}, dto);
    }
    async findOneById(id) {
        return this.apiClient.get(`/user/notification/:id`, { id });
    }
    async complete(id) {
        return this.apiClient.put(`/user/notification/:id`, { id });
    }
}
exports.UserNotificationAPI = UserNotificationAPI;
//# sourceMappingURL=user-notification.api.js.map