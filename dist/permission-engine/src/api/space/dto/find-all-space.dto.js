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
exports.FindAllSpaceDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../../../lib/dto");
const class_transformer_1 = require("class-transformer");
class FindAllSpaceDto extends dto_1.PaginationDto {
}
exports.FindAllSpaceDto = FindAllSpaceDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space owner userId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceDto.prototype, "ownerId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space ruleId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceDto.prototype, "ruleId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space topicIds in uuid',
    }),
    __metadata("design:type", Array)
], FindAllSpaceDto.prototype, "topicIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space name',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space timezone',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceDto.prototype, "timezone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space country',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space region',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space city',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space district',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceDto.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space address',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value) ? value : value.split(',').map((item) => Number(item))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(4),
    (0, class_validator_1.ArrayMaxSize)(4),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space geometry box: [a.lng, a.lat, b.lng, b.lat]',
    }),
    __metadata("design:type", Array)
], FindAllSpaceDto.prototype, "geometry", void 0);
//# sourceMappingURL=find-all-space.dto.js.map