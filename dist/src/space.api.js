"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceAPI = void 0;
class SpaceAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/space`, {}, dto);
    }
    async findOneById(id) {
        return this.apiClient.get(`/space/:id`, {
            id,
        });
    }
    async findAllMatched(dto) {
        return this.apiClient.get(`/space/matched-rule`, {}, dto);
    }
    async findAvailabilityById(id, dto) {
        return this.apiClient.get(`/space/:id/availability`, { id }, dto);
    }
    async create(dto) {
        return this.apiClient.post(`/space`, {}, dto);
    }
    async update(id, dto) {
        return this.apiClient.put(`/space/:id`, { id }, dto);
    }
    async setImage(id, type, dto) {
        return this.apiClient.post(`/space/:id/image/:type`, { id, type }, dto);
    }
    async addTopic(id, topicId) {
        return this.apiClient.put(`/space/:id/topic/add/:topicId`, { id, topicId }, {});
    }
    async removeTopic(id, topicId) {
        return this.apiClient.put(`/space/:id/topic/remove/:topicId`, { id, topicId }, {});
    }
    async reportIssue(id, dto) {
        return this.apiClient.post(`/space/:id/issue/report`, { id }, dto);
    }
    async volunteerIssueResolve(id, dto) {
        return this.apiClient.post(`/space/:id/issue/volunteer`, { id }, dto);
    }
    async resolveIssue(id, dto) {
        return this.apiClient.post(`/space/:id/issue/resolve`, { id }, dto);
    }
}
exports.SpaceAPI = SpaceAPI;
//# sourceMappingURL=space.api.js.map