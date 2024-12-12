"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleBlockAPI = void 0;
class RuleBlockAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/rule/block`, {}, dto);
    }
    async findOneById(id) {
        return this.apiClient.get(`/rule/block/:id`, {
            id,
        });
    }
    async findOneByHash(hash) {
        return this.apiClient.get(`/rule/block/hash/:hash`, {
            hash,
        });
    }
    async create(dto) {
        return this.apiClient.post(`/rule/block`, {}, dto);
    }
}
exports.RuleBlockAPI = RuleBlockAPI;
//# sourceMappingURL=rule-block.api.js.map