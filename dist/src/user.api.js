"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAPI = void 0;
class UserAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findSelf() {
        return this.apiClient.get(`/user/me`);
    }
    async findPublicData(id) {
        return this.apiClient.get(`/user/:id`, { id });
    }
    async updateSelf(dto) {
        return this.apiClient.put(`/user`, {}, dto);
    }
    async addTopic(topicId) {
        return this.apiClient.put(`/user/topic/add/:topicId`, {
            topicId,
        });
    }
    async removeTopic(topicId) {
        return this.apiClient.put(`/user/topic/remove/:topicId`, {
            topicId,
        });
    }
}
exports.UserAPI = UserAPI;
//# sourceMappingURL=user.api.js.map