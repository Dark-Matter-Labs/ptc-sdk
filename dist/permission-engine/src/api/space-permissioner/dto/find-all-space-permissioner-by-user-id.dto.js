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
exports.FindAllSpacePermissionerByUserIdDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../../../lib/dto");
class FindAllSpacePermissionerByUserIdDto extends dto_1.PaginationDto {
}
exports.FindAllSpacePermissionerByUserIdDto = FindAllSpacePermissionerByUserIdDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Is SpacePermissioner active',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], FindAllSpacePermissionerByUserIdDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'SpacePermissioner spaceId',
        type: 'string',
    }),
    __metadata("design:type", String)
], FindAllSpacePermissionerByUserIdDto.prototype, "spaceId", void 0);
//# sourceMappingURL=find-all-space-permissioner-by-user-id.dto.js.map