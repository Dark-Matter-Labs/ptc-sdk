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
exports.CreateRuleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../lib/type");
class CreateRuleDto {
}
exports.CreateRuleDto = CreateRuleDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ description: 'Rule name', required: true }),
    __metadata("design:type", String)
], CreateRuleDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rule parentRuleId in uuid' }),
    __metadata("design:type", String)
], CreateRuleDto.prototype, "parentRuleId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Rule target: space|space_event',
        required: true,
    }),
    __metadata("design:type", String)
], CreateRuleDto.prototype, "target", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(0),
    (0, class_validator_1.ArrayMaxSize)(100),
    (0, swagger_1.ApiProperty)({ description: 'Array of ruleBlockIds', nullable: true }),
    __metadata("design:type", Array)
], CreateRuleDto.prototype, "ruleBlockIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(20),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rule topicIds in uuid',
        nullable: true,
    }),
    __metadata("design:type", Array)
], CreateRuleDto.prototype, "topicIds", void 0);
//# sourceMappingURL=create-rule.dto.js.map