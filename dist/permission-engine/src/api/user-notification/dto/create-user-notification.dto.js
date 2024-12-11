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
exports.CreateUserNotificationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const type_1 = require("../../../lib/type");
class CreateUserNotificationDto {
}
exports.CreateUserNotificationDto = CreateUserNotificationDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({
        description: 'UserNotification userId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserNotificationDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'UserNotification target',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserNotificationDto.prototype, "target", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'UserNotification userId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserNotificationDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'UserNotification userId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserNotificationDto.prototype, "externalServiceId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'UserNotification userId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserNotificationDto.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'UserNotification userId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserNotificationDto.prototype, "templateName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'UserNotification userId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserNotificationDto.prototype, "subjectPart", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'UserNotification userId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserNotificationDto.prototype, "textPart", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'UserNotification userId in uuid',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserNotificationDto.prototype, "htmlPart", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'UserNotification userId in uuid',
        nullable: true,
    }),
    __metadata("design:type", Object)
], CreateUserNotificationDto.prototype, "params", void 0);
//# sourceMappingURL=create-user-notification.dto.js.map