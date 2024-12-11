import { User } from './user.entity';
import { SpaceEvent } from './space-event.entity';
export declare class ExternalService {
    id: string;
    name: string;
    owner: User;
    ownerId: string;
    link: string;
    isActive: boolean;
    details: string;
    createdAt: Date;
    updatedAt: Date;
    spaceEvents: SpaceEvent[];
}
