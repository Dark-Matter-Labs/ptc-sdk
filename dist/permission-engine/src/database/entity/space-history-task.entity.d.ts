import { Space } from './space.entity';
import { User } from './user.entity';
import { SpaceHistory } from './space-history.entity';
import { SpaceHistoryTaskImage } from './space-history-task-image.entity';
import { SpaceHistoryTaskStatus } from '../../lib/type';
export declare class SpaceHistoryTask {
    id: string;
    space: Space;
    spaceId: string;
    creator: User;
    creatorId: string;
    resolver: User;
    resolverId: string;
    spaceHistory: SpaceHistory;
    spaceHistoryId: string;
    status: SpaceHistoryTaskStatus;
    title: string;
    details: string;
    spaceHistoryTaskImages: SpaceHistoryTaskImage[];
    createdAt: Date;
    updatedAt: Date;
}
