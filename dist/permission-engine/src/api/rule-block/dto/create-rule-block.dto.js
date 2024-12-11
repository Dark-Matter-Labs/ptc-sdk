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
exports.CreateRuleBlockDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../lib/type");
class CreateRuleBlockDto {
}
exports.CreateRuleBlockDto = CreateRuleBlockDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], CreateRuleBlockDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ description: 'RuleBlock name', required: true }),
    __metadata("design:type", String)
], CreateRuleBlockDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'RuleBlock type: {space|space_event}:{general|consent_method|access|max_attendee|max_noise_level|availability|availability_unit|availability_buffer|pre_permission_check|post_event_check|access|require_equipment|expected_attendee_count|exception|benefit|risk|self_risk_assesment|insurance|noise_level|pre_permission_check_answer}',
        required: true,
    }),
    __metadata("design:type", String)
], CreateRuleBlockDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'RuleBlock content: Send empty if file exists',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateRuleBlockDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'RuleBlock details',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateRuleBlockDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(1),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceEvent files in jpeg|jpg|png|pdf',
        type: 'array',
        items: {
            type: 'string',
            format: 'binary',
        },
        maxItems: 1,
    }),
    __metadata("design:type", Array)
], CreateRuleBlockDto.prototype, "files", void 0);
//# sourceMappingURL=create-rule-block.dto.js.map