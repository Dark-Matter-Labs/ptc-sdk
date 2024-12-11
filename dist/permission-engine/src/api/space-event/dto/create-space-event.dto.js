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
exports.CreateSpaceEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateSpaceEventDto {
}
exports.CreateSpaceEventDto = CreateSpaceEventDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ description: 'SpaceEvent name', required: true }),
    __metadata("design:type", String)
], CreateSpaceEventDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent spaceId in uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceEventDto.prototype, "spaceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent ruleId in uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceEventDto.prototype, "ruleId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent externalServiceId in uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceEventDto.prototype, "externalServiceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'SpaceEvent details', nullable: true }),
    __metadata("design:type", String)
], CreateSpaceEventDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent link for registration or purchase tickets',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceEventDto.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent callbackLink for permission code submission',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceEventDto.prototype, "callbackLink", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d+[dwMyhms]$/, {
        message: 'SpaceEvent duration must in format: {number}{d|w|M|y|h|m|s}',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEvent duration in {number}{d|w|M|y|h|m|s} format (duration = endsAt - startsAt + buffer)',
    }),
    __metadata("design:type", String)
], CreateSpaceEventDto.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEvent start date',
    }),
    __metadata("design:type", Date)
], CreateSpaceEventDto.prototype, "startsAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(5),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent images in jpeg|jpg|png|gif|heic|webp',
        type: 'array',
        items: {
            type: 'string',
            format: 'binary',
        },
        maxItems: 5,
    }),
    __metadata("design:type", Array)
], CreateSpaceEventDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(20),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent topicIds in uuid',
        nullable: true,
    }),
    __metadata("design:type", Array)
], CreateSpaceEventDto.prototype, "topicIds", void 0);
//# sourceMappingURL=create-space-event.dto.js.map