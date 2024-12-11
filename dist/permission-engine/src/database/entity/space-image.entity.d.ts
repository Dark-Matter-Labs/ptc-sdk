import { Space } from './space.entity';
import { SpaceImageType } from '../../lib/type';
export declare class SpaceImage {
    id: string;
    space: Space;
    spaceId: string;
    link: string;
    type: SpaceImageType;
    createdAt: Date;
    updatedAt: Date;
}
