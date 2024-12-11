import { SpaceEvent } from './space-event.entity';
import { Rule } from './rule.entity';
import { SpaceTopic } from './space-topic.entity';
import { User } from './user.entity';
export declare class Topic {
    id: string;
    authorId: string;
    name: string;
    translation: string;
    icon: string;
    country: string;
    region: string;
    city: string;
    details: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    spaceTopics: SpaceTopic[];
    spaceEvents: SpaceEvent[];
    rules: Rule[];
    users: User[];
}
