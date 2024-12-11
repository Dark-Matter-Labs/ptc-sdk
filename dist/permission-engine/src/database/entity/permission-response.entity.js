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
exports.PermissionResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const permission_request_entity_1 = require("./permission-request.entity");
const space_permissioner_entity_1 = require("./space-permissioner.entity");
const type_1 = require("../../lib/type");
let PermissionResponse = class PermissionResponse {
};
exports.PermissionResponse = PermissionResponse;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], PermissionResponse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => permission_request_entity_1.PermissionRequest, (permissionRequest) => permissionRequest.permissionResponses),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", permission_request_entity_1.PermissionRequest)
], PermissionResponse.prototype, "permissionRequest", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'PermissionReqponse permissionRequestId in uuid',
    }),
    __metadata("design:type", String)
], PermissionResponse.prototype, "permissionRequestId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_permissioner_entity_1.SpacePermissioner, (spacePermissioner) => spacePermissioner.permissionResponses),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_permissioner_entity_1.SpacePermissioner)
], PermissionResponse.prototype, "spacePermissioner", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'PermissionReqponse spacePermissionerId in uuid',
    }),
    __metadata("design:type", String)
], PermissionResponse.prototype, "spacePermissionerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'PermissionReqponse status' }),
    __metadata("design:type", String)
], PermissionResponse.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    (0, swagger_1.ApiProperty)({ description: 'PermissionReqponse conditions' }),
    __metadata("design:type", Array)
], PermissionResponse.prototype, "conditions", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    (0, swagger_1.ApiProperty)({ description: 'PermissionReqponse excitements' }),
    __metadata("design:type", Array)
], PermissionResponse.prototype, "excitements", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    (0, swagger_1.ApiProperty)({ description: 'PermissionReqponse worries' }),
    __metadata("design:type", Array)
], PermissionResponse.prototype, "worries", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Timeout timestamp' }),
    __metadata("design:type", Date)
], PermissionResponse.prototype, "timeoutAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], PermissionResponse.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], PermissionResponse.prototype, "updatedAt", void 0);
exports.PermissionResponse = PermissionResponse = __decorate([
    (0, typeorm_1.Entity)()
], PermissionResponse);
//# sourceMappingURL=permission-response.entity.js.map