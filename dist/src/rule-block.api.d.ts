import { FindAllRuleBlockDto, CreateRuleBlockDto } from "permission-engine/src/api/rule-block/dto";
import { RuleBlock } from "permission-engine/src/database/entity/rule-block.entity";
import { ApiClient } from "./api-client";
export declare class RuleBlockAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllRuleBlockDto): Promise<{
        data: RuleBlock[];
        total: number;
    }>;
    findOneById(id: string): Promise<RuleBlock>;
    findOneByHash(hash: string): Promise<RuleBlock>;
    create(dto: CreateRuleBlockDto): Promise<RuleBlock>;
}
