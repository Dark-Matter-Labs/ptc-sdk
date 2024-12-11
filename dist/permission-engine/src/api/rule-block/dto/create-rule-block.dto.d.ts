import { RuleBlockType } from '../../../lib/type';
export declare class CreateRuleBlockDto {
    id?: string;
    name: string;
    type: RuleBlockType;
    content?: string;
    details?: string;
    files?: Express.Multer.File[];
}
