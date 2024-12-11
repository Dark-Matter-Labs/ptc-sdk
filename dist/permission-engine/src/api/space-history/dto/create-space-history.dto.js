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
exports.CreateSpaceHistoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../lib/type");
class CreateSpaceHistoryDto {
}
exports.CreateSpaceHistoryDto = CreateSpaceHistoryDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceHistory spaceId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "spaceId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiProperty)({
        description: 'Space ruleId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "ruleId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory loggerId in uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "loggerId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory parent spaceHistoryId in uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "spaceHistoryId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory spacePermissionerId in uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "spacePermissionerId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory spaceEventId in uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "spaceEventId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory permissionRequestId in uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "permissionRequestId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({
        description: 'Is SpaceHistory public',
        required: true,
    }),
    __metadata("design:type", Boolean)
], CreateSpaceHistoryDto.prototype, "isPublic", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceHistory type',
        required: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory title',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory details',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory image',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceHistoryDto.prototype, "image", void 0);
//# sourceMappingURL=create-space-history.dto.js.map