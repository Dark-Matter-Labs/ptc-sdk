import { RuleTarget } from '../../../lib/type';
import { PaginationDto } from '../../../lib/dto';
export declare class FindAllRuleDto extends PaginationDto {
    ids?: string[];
    target?: RuleTarget;
    isActive?: boolean;
    authorId?: string;
    parentRuleId?: string;
    hash?: string;
    publicHash?: string;
}
