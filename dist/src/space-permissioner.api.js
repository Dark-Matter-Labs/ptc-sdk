"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpacePermissionerAPI = void 0;
class SpacePermissionerAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAllBySpaceId(spaceId, dto) {
        return this.apiClient.get(`/permissioner/:spaceId`, { spaceId }, dto);
    }
    async findSelf(dto) {
        return this.apiClient.get(`/permissioner/self`, {}, dto);
    }
    async invite(spaceId, dto) {
        return this.apiClient.post(`/permissioner/:spaceId/invite`, { spaceId }, dto);
    }
    async join(spaceId, dto) {
        return this.apiClient.post(`/permissioner/:spaceId/join`, { spaceId }, dto);
    }
    async leave(spaceId) {
        return this.apiClient.post(`/permissioner/:spaceId/leave`, { spaceId });
    }
}
exports.SpacePermissionerAPI = SpacePermissionerAPI;
//# sourceMappingURL=space-permissioner.api.js.map