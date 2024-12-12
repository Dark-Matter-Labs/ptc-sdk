import { FindAllSpaceDto, CreateSpaceDto, UpdateSpaceDto, SetSpaceImageDto, ReportSpaceIssueDto, VolunteerSpaceIssueResolveDto, ResolveSpaceIssueDto, FindAllMatchedRuleDto, FindSpaceAvailabilityDto } from "../permission-engine/src/api/space/dto";
import { ApiClient } from "./api-client";
import { Space } from "../permission-engine/src/database/entity/space.entity";
import { SpaceAvailability, SpaceImageType } from "../permission-engine/src/lib/type";
import { SpaceImage } from "../permission-engine/src/database/entity/space-image.entity";
import { SpaceHistory } from "../permission-engine/src/database/entity/space-history.entity";
export declare class SpaceAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllSpaceDto): Promise<{
        data: Space[];
        total: number;
    }>;
    findOneById(id: string): Promise<Space>;
    findAllMatched(dto: FindAllMatchedRuleDto): Promise<{
        data: Space[];
        total: number;
    }>;
    findAvailabilityById(id: string, dto: FindSpaceAvailabilityDto): Promise<{
        data: SpaceAvailability[];
    }>;
    create(dto: CreateSpaceDto): Promise<Space>;
    update(id: string, dto: UpdateSpaceDto): Promise<Space>;
    setImage(id: string, type: SpaceImageType, dto: SetSpaceImageDto): Promise<SpaceImage>;
    addTopic(id: string, topicId: string): Promise<{
        data: {
            result: boolean;
        };
    }>;
    removeTopic(id: string, topicId: string): Promise<{
        data: {
            result: boolean;
        };
    }>;
    reportIssue(id: string, dto: ReportSpaceIssueDto): Promise<SpaceHistory>;
    volunteerIssueResolve(id: string, dto: VolunteerSpaceIssueResolveDto): Promise<SpaceHistory>;
    resolveIssue(id: string, dto: ResolveSpaceIssueDto): Promise<SpaceHistory>;
}
