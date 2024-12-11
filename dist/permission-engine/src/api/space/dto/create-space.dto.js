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
exports.CreateSpaceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateSpaceDto {
}
exports.CreateSpaceDto = CreateSpaceDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ description: 'Space name in string', required: true }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Space zipcode' }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "zipcode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ description: 'Country', required: true }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ description: 'State|Region', required: true }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ description: 'City', required: true }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ description: 'District', required: true }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'Address', required: true }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'Latitude in string', required: true }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'Longitude in string', required: true }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiProperty)({ description: 'Space rule ruleId in uuid' }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "ruleId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'Space description' }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Space external link' }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Space timezone' }),
    __metadata("design:type", String)
], CreateSpaceDto.prototype, "timezone", void 0);
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
], CreateSpaceDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(20),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Space topicIds in uuid',
        nullable: true,
    }),
    __metadata("design:type", Array)
], CreateSpaceDto.prototype, "topicIds", void 0);
//# sourceMappingURL=create-space.dto.js.map