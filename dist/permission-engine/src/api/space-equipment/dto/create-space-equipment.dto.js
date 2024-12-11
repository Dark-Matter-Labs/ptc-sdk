"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpaceEquipmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../lib/type");
class CreateSpaceEquipmentDto {
}
exports.CreateSpaceEquipmentDto = CreateSpaceEquipmentDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEquipment spaceId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateSpaceEquipmentDto.prototype, "spaceId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEquipment name',
        required: true,
    }),
    __metadata("design:type", String)
], CreateSpaceEquipmentDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEquipment type: general|audio|video|lighting|stationery|furniture|sports|kitchen|craft|safty|computer|facility',
        required: true,
    }),
    __metadata("design:type", String)
], CreateSpaceEquipmentDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEquipment quantity',
        required: true,
    }),
    __metadata("design:type", Number)
], CreateSpaceEquipmentDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEquipment details',
        required: true,
    }),
    __metadata("design:type", String)
], CreateSpaceEquipmentDto.prototype, "details", void 0);
//# sourceMappingURL=create-space-equipment.dto.js.map