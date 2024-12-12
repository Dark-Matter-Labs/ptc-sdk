import { FindAllTopicDto } from "permission-engine/src/api/topic/dto";
import { Topic } from "permission-engine/src/database/entity/topic.entity";
import { ApiClient } from "./api-client";
export declare class TopicAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllTopicDto): Promise<{
        data: Topic[];
        total: number;
    }>;
    findAllSpaceAssigned(dto: FindAllTopicDto): Promise<{
        data: Topic[];
        total: number;
    }>;
    findAllBySpaceId(spaceId: string): Promise<{
        data: Topic[];
        total: number;
    }>;
    findAllBySpaceEventId(spaceEventId: string): Promise<{
        data: Topic[];
        total: number;
    }>;
    findAllByRuleId(ruleId: string): Promise<{
        data: Topic[];
        total: number;
    }>;
    findOneById(id: string): Promise<{
        data: Topic[];
        total: number;
    }>;
}
