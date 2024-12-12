"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionResponseAPI = void 0;
class PermissionResponseAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/permission/response`, {}, dto);
    }
    async findAllSelfResponse(dto) {
        return this.apiClient.get(`/permission/response/self`, {}, dto);
    }
    async findOneById(id) {
        return this.apiClient.get(`/permission/response/:id`, {
            id,
        });
    }
    async approve(id, dto) {
        return this.apiClient.post(`/permission/response/:id/approve`, { id }, dto);
    }
    async reject(id, dto) {
        return this.apiClient.post(`/permission/response/:id/reject`, { id }, dto);
    }
    async abstention(id, dto) {
        return this.apiClient.post(`/permission/response/:id/abstention`, { id }, dto);
    }
}
exports.PermissionResponseAPI = PermissionResponseAPI;
//# sourceMappingURL=permission-response.api.js.map