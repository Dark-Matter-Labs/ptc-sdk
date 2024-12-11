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
exports.UpdateSpaceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateSpaceDto {
}
exports.UpdateSpaceDto = UpdateSpaceDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Space name in string' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Space zipcode' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "zipcode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Country' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiPropertyOptional)({ description: 'State|Region' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiPropertyOptional)({ description: 'City' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiPropertyOptional)({ description: 'District' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Address' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Latitude in string' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Longitude in string' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Space rule ruleId in uuid' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "ruleId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Space description' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Space external link' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Space timezone' }),
    __metadata("design:type", String)
], UpdateSpaceDto.prototype, "timezone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(5),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space images in jpeg|jpg|png|gif|heic|webp',
        type: 'array',
        items: {
            type: 'string',
            format: 'binary',
        },
        maxItems: 5,
    }),
    __metadata("design:type", Array)
], UpdateSpaceDto.prototype, "images", void 0);
//# sourceMappingURL=update-space.dto.js.map