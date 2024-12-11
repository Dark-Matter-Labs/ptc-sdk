import { RuleBlockType } from '../../../lib/type';
import { PaginationDto } from '../../../lib/dto';
export declare class FindAllRuleBlockDto extends PaginationDto {
    type?: RuleBlockType;
    authorId?: string;
    hash?: string;
    ids?: string[];
}
