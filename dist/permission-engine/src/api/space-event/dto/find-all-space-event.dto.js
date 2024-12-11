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
exports.FindAllSpaceEventDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const type_1 = require("../../../lib/type");
const dto_1 = require("../../../lib/dto");
const class_transformer_1 = require("class-transformer");
class FindAllSpaceEventDto extends dto_1.PaginationDto {
    constructor() {
        super(...arguments);
        this.sortBy = type_1.SpaceEventRuleSortBy.startsAtAsc;
    }
}
exports.FindAllSpaceEventDto = FindAllSpaceEventDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent organizer userId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceEventDto.prototype, "organizerId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent spaceId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceEventDto.prototype, "spaceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent ruleId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceEventDto.prototype, "ruleId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent externalServiceId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceEventDto.prototype, "externalServiceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent permissionRequestId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceEventDto.prototype, "permissionRequestId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent statuses',
    }),
    __metadata("design:type", Array)
], FindAllSpaceEventDto.prototype, "statuses", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent topicIds in uuid',
    }),
    __metadata("design:type", Array)
], FindAllSpaceEventDto.prototype, "topicIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent startsAfter date',
    }),
    __metadata("design:type", Date)
], FindAllSpaceEventDto.prototype, "startsAfter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent endsBefore date',
    }),
    __metadata("design:type", Date)
], FindAllSpaceEventDto.prototype, "endsBefore", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent name',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllSpaceEventDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: `SpaceApprovedRule sort by: ${[
            type_1.SpaceEventRuleSortBy.timeAsc,
            type_1.SpaceEventRuleSortBy.timeDesc,
            type_1.SpaceEventRuleSortBy.startsAtAsc,
            type_1.SpaceEventRuleSortBy.startsAtDesc,
            type_1.SpaceEventRuleSortBy.endsAtAsc,
            type_1.SpaceEventRuleSortBy.endsAtDesc,
        ].join('|')}`,
        type: 'string',
    }),
    __metadata("design:type", String)
], FindAllSpaceEventDto.prototype, "sortBy", void 0);
//# sourceMappingURL=find-all-space-event.dto.js.map