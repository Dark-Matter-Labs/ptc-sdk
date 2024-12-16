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
exports.AddSpaceHistoryTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AddSpaceHistoryTaskDto {
}
exports.AddSpaceHistoryTaskDto = AddSpaceHistoryTaskDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistoryTask title',
        nullable: true,
    }),
    __metadata("design:type", String)
], AddSpaceHistoryTaskDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceHistoryTask details',
        required: true,
    }),
    __metadata("design:type", String)
], AddSpaceHistoryTaskDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(5),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceHistoryTask image in jpeg|jpg|png|gif|heic|webp',
        type: 'array',
        items: {
            type: 'string',
            format: 'binary',
        },
        maxItems: 5,
    }),
    __metadata("design:type", Array)
], AddSpaceHistoryTaskDto.prototype, "images", void 0);
//# sourceMappingURL=add-space-history-task.dto.js.map