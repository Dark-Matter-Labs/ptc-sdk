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
exports.SpaceEquipment = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const space_entity_1 = require("./space.entity");
const type_1 = require("../../lib/type");
let SpaceEquipment = class SpaceEquipment {
};
exports.SpaceEquipment = SpaceEquipment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], SpaceEquipment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_entity_1.Space, (space) => space.spaceEvents),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_entity_1.Space)
], SpaceEquipment.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceEquipment.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceEquipment name in string' }),
    __metadata("design:type", String)
], SpaceEquipment.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEquipment type: general|audio|video|lighting|stationery|furniture|sports|kitchen|craft|safty|computer|facility',
    }),
    __metadata("design:type", String)
], SpaceEquipment.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceEquipment quantity in number' }),
    __metadata("design:type", Number)
], SpaceEquipment.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceEquipment detail in string' }),
    __metadata("design:type", String)
], SpaceEquipment.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], SpaceEquipment.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpaceEquipment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], SpaceEquipment.prototype, "updatedAt", void 0);
exports.SpaceEquipment = SpaceEquipment = __decorate([
    (0, typeorm_1.Entity)()
], SpaceEquipment);
//# sourceMappingURL=space-equipment.entity.js.map