import { FindAllSpaceEventDto, CreateSpaceEventDto, UpdateSpaceEventDto, CompleteSpaceEventDto, CompleteWithIssueResolvedSpaceEventDto, CompleteWithIssueSpaceEventDto, SetSpaceEventImageDto, UpdateSpaceEventAdditionalInfoDto, UpdateSpaceEventReportDto } from "permission-engine/src/api/space-event/dto";
import { SpaceEvent } from "permission-engine/src/database/entity/space-event.entity";
import { ApiClient } from "./api-client";
import { RuleBlock } from "permission-engine/src/database/entity/rule-block.entity";
import { SpaceHistory } from "permission-engine/src/database/entity/space-history.entity";
import { SpaceEventImage } from "permission-engine/src/database/entity/space-event-image.entity";
import { SpaceEventImageType } from "permission-engine/src/lib/type";
export declare class SpaceEventAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllSpaceEventDto): Promise<{
        data: SpaceEvent[];
        total: number;
    }>;
    findReportQuestions(): Promise<{
        spaceSuitability: string;
        spaceSatisfaction: string;
        eventGoal: string;
        spaceIssue: string;
        spaceSuggestions: string;
    }>;
    findOneById(id: string): Promise<SpaceEvent>;
    create(dto: CreateSpaceEventDto): Promise<SpaceEvent>;
    update(id: string, dto: UpdateSpaceEventDto): Promise<SpaceEvent>;
    setImage(id: string, type: SpaceEventImageType, dto: SetSpaceEventImageDto): Promise<SpaceEventImage>;
    updateAdditionalInfo(id: string, dto: UpdateSpaceEventAdditionalInfoDto): Promise<{
        data: {
            result: boolean;
        };
    }>;
    updateReport(id: string, dto: UpdateSpaceEventReportDto): Promise<{
        data: {
            result: boolean;
        };
    }>;
    run(id: string): Promise<{
        data: {
            result: boolean;
        };
    }>;
    cancel(id: string): Promise<{
        data: {
            result: boolean;
        };
    }>;
    findPostEventCheckRuleBlocks(id: string): Promise<RuleBlock[]>;
    complete(id: string, dto: CompleteSpaceEventDto): Promise<{
        data: {
            result: boolean;
            addedSpaceEventImageIds: string[];
        };
    }>;
    completeWithIssue(id: string, dto: CompleteWithIssueSpaceEventDto): Promise<{
        data: {
            result: boolean;
            addedSpaceEventImageIds: string[];
            spaceHistory: SpaceHistory;
        };
    }>;
    completeWithIssueResolved(id: string, dto: CompleteWithIssueResolvedSpaceEventDto): Promise<{
        data: {
            result: boolean;
            addedSpaceEventImageIds: string[];
            spaceHistories: SpaceHistory[];
        };
    }>;
}
