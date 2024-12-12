"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicAPI = void 0;
class TopicAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/topic`, {}, dto);
    }
    async findAllSpaceAssigned(dto) {
        return this.apiClient.get(`/topic/space`, {}, dto);
    }
    async findAllBySpaceId(spaceId) {
        return this.apiClient.get(`/topic/space/:spaceId`, { spaceId });
    }
    async findAllBySpaceEventId(spaceEventId) {
        return this.apiClient.get(`/topic/event/:spaceEventId`, { spaceEventId });
    }
    async findAllByRuleId(ruleId) {
        return this.apiClient.get(`/topic/rule/:ruleId`, { ruleId });
    }
    async findOneById(id) {
        return this.apiClient.get(`/topic/:id`, {
            id,
        });
    }
}
exports.TopicAPI = TopicAPI;
//# sourceMappingURL=topic.api.js.map