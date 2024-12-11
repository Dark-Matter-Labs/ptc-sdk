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
exports.CreateSpaceImageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../lib/type");
class CreateSpaceImageDto {
    constructor() {
        this.type = type_1.SpaceImageType.list;
    }
}
exports.CreateSpaceImageDto = CreateSpaceImageDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceImage id in uuid',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceImageDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)('4'),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceImage spaceId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateSpaceImageDto.prototype, "spaceId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceImage link',
        required: true,
    }),
    __metadata("design:type", String)
], CreateSpaceImageDto.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpaceImage type',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateSpaceImageDto.prototype, "type", void 0);
//# sourceMappingURL=create-space-image.dto.js.map