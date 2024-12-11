import { Space } from './space.entity';
import { SpaceEquipmentType } from '../../lib/type';
export declare class SpaceEquipment {
    id: string;
    space: Space;
    spaceId: string;
    name: string;
    type: SpaceEquipmentType;
    quantity: number;
    details: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
