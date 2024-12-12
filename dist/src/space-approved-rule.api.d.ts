import { ApiClient } from "./api-client";
import { Space } from "../permission-engine/src/database/entity/space.entity";
import { FindAllSpaceApprovedRuleDto, CreateSpaceApprovedRuleDto, UpdateSpaceApprovedRuleDto } from "../permission-engine/src/api/space-approved-rule/dto";
import { SpaceApprovedRule } from "../permission-engine/src/database/entity/space-approved-rule.entity";
export declare class SpaceApprovedRuleAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllSpaceApprovedRuleDto): Promise<{
        data: Space[];
        total: number;
    }>;
    create(dto: CreateSpaceApprovedRuleDto): Promise<SpaceApprovedRule>;
    update(dto: UpdateSpaceApprovedRuleDto): Promise<{
        data: {
            result: boolean;
        };
    }>;
}
