"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceHistoryAPI = void 0;
class SpaceHistoryAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/space/history`, {}, dto);
    }
    async findOneById(id) {
        return this.apiClient.get(`/space/history/:id`, {
            id,
        });
    }
    async findAllIssue(dto) {
        return this.apiClient.get(`/space/history/issue`, {}, dto);
    }
    async findAllUnresolvedIssue(dto) {
        return this.apiClient.get(`/space/history/issue/unresolved`, {}, dto);
    }
}
exports.SpaceHistoryAPI = SpaceHistoryAPI;
//# sourceMappingURL=space-history.api.js.map