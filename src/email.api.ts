import { ApiClient } from "./api-client";
import { PermissionRequest } from "../permission-engine/src/database/entity/permission-request.entity";

export class EmailAPI {
  constructor(private apiClient: ApiClient) {}

  async unsubscribe() {
    return this.apiClient.post<null, PermissionRequest>(`/email/unsubscribe`);
  }
}
