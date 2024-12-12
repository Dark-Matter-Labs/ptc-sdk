"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAPI = void 0;
class EmailAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async unsubscribe() {
        return this.apiClient.post(`/email/unsubscribe`);
    }
}
exports.EmailAPI = EmailAPI;
//# sourceMappingURL=email.api.js.map