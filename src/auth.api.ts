import { ApiClient } from "./api-client";

export class AuthAPI {
  constructor(private apiClient: ApiClient) {}

  async refresh() {
    return this.apiClient.post<null, { message: string }>(`/auth/refresh`);
  }

  async revoke() {
    return this.apiClient.post<null, { message: string }>(`/auth/revoke`);
  }

  async getProfile() {
    return this.apiClient.get(`/auth/profile`);
  }

  async logout() {
    return this.apiClient.post<null, { message: string }>(`/auth/logout`);
  }
}
