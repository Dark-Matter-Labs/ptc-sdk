import { UpdateUserDto } from "permission-engine/src/api/user/dto";
import { ApiClient } from "./api-client";
import { User } from "permission-engine/src/database/entity/user.entity";

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
