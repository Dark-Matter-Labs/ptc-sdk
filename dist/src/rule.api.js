"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleAPI = void 0;
class RuleAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/rule`, {}, dto);
    }
    async findOneById(id) {
        return this.apiClient.get(`/rule/:id`, {
            id,
        });
    }
    async findOneBySpaceId(spaceId) {
        return this.apiClient.get(`/rule/space/:spaceId`, {
            spaceId,
        });
    }
    async create(dto) {
        return this.apiClient.post(`/rule`, {}, dto);
    }
    async fork(id, dto) {
        return this.apiClient.post(`/rule/:id/fork`, { id }, dto);
    }
    async archiveAndUpdate(id, dto) {
        return this.apiClient.put(`/rule/:id`, { id }, dto);
    }
}
exports.RuleAPI = RuleAPI;
//# sourceMappingURL=rule.api.js.map