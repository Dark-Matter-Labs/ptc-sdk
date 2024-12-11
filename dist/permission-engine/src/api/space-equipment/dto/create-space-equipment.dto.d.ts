import { SpaceEquipmentType } from '../../../lib/type';
export declare class CreateSpaceEquipmentDto {
    spaceId: string;
    name: string;
    type: SpaceEquipmentType;
    quantity: number;
    details: string;
}
