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
exports.FindAllPermissionRequestDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const type_1 = require("../../../lib/type");
const dto_1 = require("../../../lib/dto");
const class_transformer_1 = require("class-transformer");
class FindAllPermissionRequestDto extends dto_1.PaginationDto {
    constructor() {
        super(...arguments);
        this.sortBy = type_1.TimeSortBy.timeAsc;
    }
}
exports.FindAllPermissionRequestDto = FindAllPermissionRequestDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'PermissionRequest spaceId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllPermissionRequestDto.prototype, "spaceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'PermissionRequest spaceEventId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllPermissionRequestDto.prototype, "spaceEventId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'PermissionRequest ruleId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllPermissionRequestDto.prototype, "ruleId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'PermissionRequest statuses',
    }),
    __metadata("design:type", Array)
], FindAllPermissionRequestDto.prototype, "statuses", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'PermissionRequest resolveStatuses',
    }),
    __metadata("design:type", Array)
], FindAllPermissionRequestDto.prototype, "resolveStatuses", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], FindAllPermissionRequestDto.prototype, "createdBefore", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: `SpaceApprovedRule sort by: ${[type_1.TimeSortBy.timeAsc, type_1.TimeSortBy.timeDesc].join('|')}`,
        type: 'string',
    }),
    __metadata("design:type", String)
], FindAllPermissionRequestDto.prototype, "sortBy", void 0);
//# sourceMappingURL=find-all-permission-request.dto.js.map