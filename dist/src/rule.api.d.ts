import { Rule } from "../permission-engine/src/database/entity/rule.entity";
import { ApiClient } from "./api-client";
import { CreateRuleDto, FindAllRuleDto, ForkRuleDto, UpdateRuleDto } from "../permission-engine/src/api/rule/dto";
export declare class RuleAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllRuleDto): Promise<{
        data: Rule[];
        total: number;
    }>;
    findOneById(id: string): Promise<Rule>;
    findOneBySpaceId(spaceId: string): Promise<Rule>;
    create(dto: CreateRuleDto): Promise<Rule>;
    fork(id: string, dto: ForkRuleDto): Promise<Rule>;
    archiveAndUpdate(id: string, dto: UpdateRuleDto): Promise<Rule>;
}
