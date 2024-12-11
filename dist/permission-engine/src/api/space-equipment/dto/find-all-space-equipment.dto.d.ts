import { SpaceEquipmentType } from '../../../lib/type';
import { PaginationDto } from '../../../lib/dto';
export declare class FindAllSpaceEquipmentDto extends PaginationDto {
    spaceId: string;
    types?: SpaceEquipmentType[];
    isActive?: boolean;
}
