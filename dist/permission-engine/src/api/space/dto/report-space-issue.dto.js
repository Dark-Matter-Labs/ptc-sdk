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
exports.ReportSpaceIssueDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReportSpaceIssueDto {
}
exports.ReportSpaceIssueDto = ReportSpaceIssueDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory title',
        nullable: true,
    }),
    __metadata("design:type", String)
], ReportSpaceIssueDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceHistory details',
        required: true,
    }),
    __metadata("design:type", String)
], ReportSpaceIssueDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceHistory is public or not',
        required: true,
    }),
    __metadata("design:type", Boolean)
], ReportSpaceIssueDto.prototype, "isPublic", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(1),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistory image in jpeg|jpg|png|gif|heic|webp',
        type: 'array',
        items: {
            type: 'string',
            format: 'binary',
        },
        maxItems: 1,
    }),
    __metadata("design:type", Array)
], ReportSpaceIssueDto.prototype, "image", void 0);
//# sourceMappingURL=report-space-issue.dto.js.map