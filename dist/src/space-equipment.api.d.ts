import { ApiClient } from "./api-client";
import { Space } from "permission-engine/src/database/entity/space.entity";
import { SpaceEquipment } from "permission-engine/src/database/entity/space-equipment.entity";
import { CreateSpaceEquipmentDto, FindAllSpaceEquipmentDto, FindAllSpaceFacilityDto, UpdateSpaceEquipmentDto } from "permission-engine/src/api/space-equipment/dto";
export declare class SpaceEquipmentAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findAll(dto: FindAllSpaceEquipmentDto): Promise<{
        data: SpaceEquipment[];
        total: number;
    }>;
    findAllFacility(dto: FindAllSpaceFacilityDto): Promise<{
        data: SpaceEquipment[];
        total: number;
    }>;
    findOneById(id: string): Promise<SpaceEquipment>;
    create(dto: CreateSpaceEquipmentDto): Promise<Space>;
    update(id: string, dto: UpdateSpaceEquipmentDto): Promise<Space>;
}
