import { RuleTarget } from '../../../lib/type';
export declare class CreateRuleDto {
    name: string;
    parentRuleId?: string;
    target: RuleTarget;
    ruleBlockIds?: string[];
    topicIds?: string[];
}
