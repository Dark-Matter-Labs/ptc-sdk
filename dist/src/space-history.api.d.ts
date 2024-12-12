import { FindAllSpaceHistoryDto, FindAllIssueSpaceHistoryDto } from "../permission-engine/src/api/space-history/dto";
import { SpaceHistory } from "../permission-engine/src/database/entity/space-history.entity";
import { ApiClient } from "./api-client";
export declare class SpaceHistoryAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllSpaceHistoryDto): Promise<{
        data: SpaceHistory[];
        total: number;
    }>;
    findOneById(id: string): Promise<SpaceHistory>;
    findAllIssue(dto: FindAllIssueSpaceHistoryDto): Promise<{
        data: SpaceHistory[];
        total: number;
    }>;
    findAllUnresolvedIssue(dto: FindAllIssueSpaceHistoryDto): Promise<{
        data: SpaceHistory[];
        total: number;
    }>;
}
