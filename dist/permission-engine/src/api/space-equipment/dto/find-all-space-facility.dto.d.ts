import { PaginationDto } from '../../../lib/dto';
export declare class FindAllSpaceFacilityDto extends PaginationDto {
    spaceId: string;
    isActive?: boolean;
}
