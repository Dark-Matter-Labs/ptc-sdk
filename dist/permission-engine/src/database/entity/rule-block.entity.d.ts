import { User } from './user.entity';
import { Rule } from './rule.entity';
import { RuleBlockType } from '../../lib/type';
export declare class RuleBlock {
    id: string;
    name: string;
    hash: string;
    author: User;
    authorId: string;
    type: RuleBlockType;
    content: string;
    details: string;
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
    rules: Rule;
}
