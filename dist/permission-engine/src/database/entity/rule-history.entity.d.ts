import { SpaceEvent } from './space-event.entity';
import { Topic } from './topic.entity';
export declare class RuleHistory {
    id: string;
    name: string;
    ownerId: string;
    zipcode: number;
    country: string;
    region: string;
    city: string;
    district: string;
    address: string;
    latitude: string;
    longitude: string;
    isActive: boolean;
    ruleId: string;
    consentCondition: string;
    details: string;
    createdAt: Date;
    updatedAt: Date;
    spaceEvents: SpaceEvent[];
    topics: Topic[];
}
