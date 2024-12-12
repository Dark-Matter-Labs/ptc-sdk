import { ApiClient } from "./api-client";
import { Space } from "../permission-engine/src/database/entity/space.entity";
import { SpaceEquipment } from "../permission-engine/src/database/entity/space-equipment.entity";
import {
  CreateSpaceEquipmentDto,
  FindAllSpaceEquipmentDto,
  FindAllSpaceFacilityDto,
  UpdateSpaceEquipmentDto,
} from "../permission-engine/src/api/space-equipment/dto";

export class SpaceEquipmentAPI {
  constructor(private apiClient: ApiClient) {}

  async findAll(
    dto: FindAllSpaceEquipmentDto
  ): Promise<{ data: SpaceEquipment[]; total: number }> {
    return this.apiClient.get<{ data: SpaceEquipment[]; total: number }>(
      `/space/equipment`,
      {},
      dto
    );
  }

  async findAllFacility(
    dto: FindAllSpaceFacilityDto
  ): Promise<{ data: SpaceEquipment[]; total: number }> {
    return this.apiClient.get<{ data: SpaceEquipment[]; total: number }>(
      `/space/equipment/facility`,
      {},
      dto
    );
  }

  async findOneById(id: string) {
    return this.apiClient.get<SpaceEquipment>(`/space/equipment/:id`, {
      id,
    });
  }

  async create(dto: CreateSpaceEquipmentDto) {
    return this.apiClient.post<CreateSpaceEquipmentDto, Space>(
      `/space/equipment`,
      {},
      dto
    );
  }

  async update(id: string, dto: UpdateSpaceEquipmentDto) {
    return this.apiClient.put<UpdateSpaceEquipmentDto, Space>(
      `/space/equipment/:id`,
      { id },
      dto
    );
  }
}
