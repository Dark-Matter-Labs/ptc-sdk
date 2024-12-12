import { ApiClient } from "./api-client";
export declare class AuthAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    refresh(): Promise<{
        message: string;
    }>;
    revoke(): Promise<{
        message: string;
    }>;
    getProfile(): Promise<unknown>;
    logout(): Promise<{
        message: string;
    }>;
}
