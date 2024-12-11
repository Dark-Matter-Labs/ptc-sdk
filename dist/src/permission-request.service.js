"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionRequestService = void 0;
class PermissionRequestService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/permission/request`, {}, dto);
    }
    async findOneByPermissionCode(permissionCode) {
        return this.apiClient.get(`/permission/request/code/:permissionCode`, {
            permissionCode,
        });
    }
    async findOne(id) {
        return this.apiClient.get(`/permission/request/:id`, {
            id,
        });
    }
    async spaceEventRulePreApprovePermissionRequest(dto) {
        return this.apiClient.post(`/permission/request/pre-approve`, {}, dto);
    }
    async spaceRuleChangePermissionRequest(dto) {
        return this.apiClient.post(`/permission/request/rule-change`, {}, dto);
    }
    async spaceEventPermissionRequest(dto) {
        return this.apiClient.post(`/permission/request/event`, {}, dto);
    }
    async cancel(id, dto) {
        return this.apiClient.put(`/permission/request/:id/cancel`, { id }, dto);
    }
    async accept(id) {
        return this.apiClient.put(`/permission/request/:id/accept`, { id });
    }
    async drop(id, dto) {
        return this.apiClient.put(`/permission/request/:id/drop`, { id }, dto);
    }
}
exports.PermissionRequestService = PermissionRequestService;
//# sourceMappingURL=permission-request.service.js.map