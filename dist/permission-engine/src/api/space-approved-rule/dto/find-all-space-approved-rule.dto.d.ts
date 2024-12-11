import { PaginationDto } from '../../../lib/dto';
import { SpaceApprovedRuleSortBy } from '../../../lib/type';
export declare class FindAllSpaceApprovedRuleDto extends PaginationDto {
    spaceId: string;
    ruleId?: string;
    publicHash?: string;
    isActive?: boolean;
    isPublic?: boolean;
    topicIds?: string[];
    sortBy?: SpaceApprovedRuleSortBy;
}
