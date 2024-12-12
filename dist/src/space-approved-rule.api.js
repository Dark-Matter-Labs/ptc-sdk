"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceApprovedRuleAPI = void 0;
class SpaceApprovedRuleAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/space/approved-rule`, {}, dto);
    }
    async create(dto) {
        return this.apiClient.post(`/space/approved-rule`, {}, dto);
    }
    async update(dto) {
        return this.apiClient.put(`/space/approved-rule/:id`, {}, dto);
    }
}
exports.SpaceApprovedRuleAPI = SpaceApprovedRuleAPI;
//# sourceMappingURL=space-approved-rule.api.js.map