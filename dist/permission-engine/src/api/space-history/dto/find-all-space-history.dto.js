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
exports.FindAllSpaceHistoryDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../../../lib/dto");
const class_transformer_1 = require("class-transformer");
class FindAllSpaceHistoryDto extends dto_1.PaginationDto {
}
exports.FindAllSpaceHistoryDto = FindAllSpaceHistoryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", Boolean)
], FindAllSpaceHistoryDto.prototype, "isPublic", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceHistory spaceId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceHistoryDto.prototype, "spaceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory spaceEventId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceHistoryDto.prototype, "spaceEventId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory type',
    }),
    __metadata("design:type", Array)
], FindAllSpaceHistoryDto.prototype, "types", void 0);
//# sourceMappingURL=find-all-space-history.dto.js.map