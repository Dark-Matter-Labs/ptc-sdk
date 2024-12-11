import { Space } from './space.entity';
import { Topic } from './topic.entity';
export declare class SpaceTopic {
    space: Space;
    spaceId: string;
    topic: Topic;
    topicId: string;
    createdAt: Date;
    updatedAt: Date;
}
