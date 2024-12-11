import { SpaceEvent } from './space-event.entity';
import { SpaceEventImageType } from '../../lib/type';
export declare class SpaceEventImage {
    id: string;
    spaceEvent: SpaceEvent;
    spaceEventId: string;
    link: string;
    type: SpaceEventImageType;
    createdAt: Date;
    updatedAt: Date;
}
