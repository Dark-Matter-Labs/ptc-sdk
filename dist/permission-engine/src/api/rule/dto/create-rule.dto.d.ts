import { RuleTarget } from '../../../lib/type';
export declare class CreateRuleDto {
    name: string;
    parentRuleId?: string;
    target: RuleTarget;
    details?: string;
    ruleBlockIds?: string[];
    topicIds?: string[];
}
