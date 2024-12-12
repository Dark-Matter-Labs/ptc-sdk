"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceEquipmentAPI = void 0;
class SpaceEquipmentAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async findAll(dto) {
        return this.apiClient.get(`/space/equipment`, {}, dto);
    }
    async findAllFacility(dto) {
        return this.apiClient.get(`/space/equipment/facility`, {}, dto);
    }
    async findOneById(id) {
        return this.apiClient.get(`/space/equipment/:id`, {
            id,
        });
    }
    async create(dto) {
        return this.apiClient.post(`/space/equipment`, {}, dto);
    }
    async update(id, dto) {
        return this.apiClient.put(`/space/equipment/:id`, { id }, dto);
    }
}
exports.SpaceEquipmentAPI = SpaceEquipmentAPI;
//# sourceMappingURL=space-equipment.api.js.map