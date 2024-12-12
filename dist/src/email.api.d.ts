import { ApiClient } from "./api-client";
import { PermissionRequest } from "../permission-engine/src/database/entity/permission-request.entity";
export declare class EmailAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    unsubscribe(): Promise<PermissionRequest>;
}
