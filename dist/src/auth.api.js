"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAPI = void 0;
class AuthAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async refresh() {
        return this.apiClient.post(`/auth/refresh`);
    }
    async revoke() {
        return this.apiClient.post(`/auth/revoke`);
    }
    async getProfile() {
        return this.apiClient.get(`/auth/profile`);
    }
    async logout() {
        return this.apiClient.post(`/auth/logout`);
    }
}
exports.AuthAPI = AuthAPI;
//# sourceMappingURL=auth.api.js.map