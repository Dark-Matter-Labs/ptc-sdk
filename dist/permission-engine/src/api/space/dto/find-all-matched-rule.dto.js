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
exports.FindAllMatchedRuleDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../../../lib/dto");
const class_transformer_1 = require("class-transformer");
class FindAllMatchedRuleDto extends dto_1.PaginationDto {
}
exports.FindAllMatchedRuleDto = FindAllMatchedRuleDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({
        description: 'spaceId in uuid',
        type: String,
    }),
    __metadata("design:type", String)
], FindAllMatchedRuleDto.prototype, "spaceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (Array.isArray(value) ? value : value.split(','))),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.Matches)(/^[a-f0-9]{64}\^.+\^.+$/, {
        each: true,
        message: 'Each item must match {ruleBlockHash}^{desired value} format',
    }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'RuleBlock content({spaceRuleBlockHash}^{desired value}[])',
    }),
    __metadata("design:type", Array)
], FindAllMatchedRuleDto.prototype, "spaceEventExceptions", void 0);
//# sourceMappingURL=find-all-matched-rule.dto.js.map