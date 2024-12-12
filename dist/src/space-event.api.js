"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceEventAPI = void 0;
class SpaceEventAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/event`, {}, dto);
    }
    async findReportQuestions() {
        return this.apiClient.get(`/event/report`);
    }
    async findOneById(id) {
        return this.apiClient.get(`/event/:id`, {
            id,
        });
    }
    async create(dto) {
        return this.apiClient.post(`/event`, {}, dto);
    }
    async update(id, dto) {
        return this.apiClient.put(`/event/:id`, { id }, dto);
    }
    async setImage(id, type, dto) {
        return this.apiClient.post(`/event/:id/image/:type`, { id, type }, dto);
    }
    async updateAdditionalInfo(id, dto) {
        return this.apiClient.put(`/event/:id/additional-info`, { id }, dto);
    }
    async updateReport(id, dto) {
        return this.apiClient.put(`/event/:id/report`, { id }, dto);
    }
    async run(id) {
        return this.apiClient.put(`/event/:id/run`, { id });
    }
    async cancel(id) {
        return this.apiClient.put(`/event/:id/cancel`, { id });
    }
    async findPostEventCheckRuleBlocks(id) {
        return this.apiClient.get(`/event/:id/complete`, { id });
    }
    async complete(id, dto) {
        return this.apiClient.put(`/event/:id/complete`, { id }, dto);
    }
    async completeWithIssue(id, dto) {
        return this.apiClient.put(`/event/:id/complete/issue`, { id }, dto);
    }
    async completeWithIssueResolved(id, dto) {
        return this.apiClient.put(`/event/:id/complete/issue/resolve`, { id }, dto);
    }
}
exports.SpaceEventAPI = SpaceEventAPI;
//# sourceMappingURL=space-event.api.js.map