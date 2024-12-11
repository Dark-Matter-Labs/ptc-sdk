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
exports.CompleteSpaceEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CompleteSpaceEventDto {
}
exports.CompleteSpaceEventDto = CompleteSpaceEventDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    (0, swagger_1.ApiPropertyOptional)({ description: 'SpaceEvent post event details' }),
    __metadata("design:type", String)
], CompleteSpaceEventDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Complete SpaceEventRuleBlock uuids',
    }),
    __metadata("design:type", Array)
], CompleteSpaceEventDto.prototype, "completePostEventCheckRuleBlockIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Incomplete SpaceEventRuleBlock uuids',
    }),
    __metadata("design:type", Array)
], CompleteSpaceEventDto.prototype, "incompletePostEventCheckRuleBlockIds", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent complete images in jpeg|jpg|png|gif|heic|webp',
        type: 'array',
        items: {
            type: 'string',
            format: 'binary',
        },
    }),
    __metadata("design:type", Array)
], CompleteSpaceEventDto.prototype, "images", void 0);
//# sourceMappingURL=complete-space-event.dto.js.map