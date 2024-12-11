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
exports.SpacePermissioner = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const space_entity_1 = require("./space.entity");
const user_entity_1 = require("./user.entity");
const permission_response_entity_1 = require("./permission-response.entity");
const space_history_entity_1 = require("./space-history.entity");
let SpacePermissioner = class SpacePermissioner {
};
exports.SpacePermissioner = SpacePermissioner;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], SpacePermissioner.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_entity_1.Space, (space) => space.spacePermissioners),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_entity_1.Space)
], SpacePermissioner.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpacePermissioner spaceId in uuid' }),
    __metadata("design:type", String)
], SpacePermissioner.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.spacePermissioners),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], SpacePermissioner.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpacePermissioner userId in uuid' }),
    __metadata("design:type", String)
], SpacePermissioner.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.spacePermissionerInviters),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], SpacePermissioner.prototype, "inviter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpacePermissioner inviterId in uuid' }),
    __metadata("design:type", String)
], SpacePermissioner.prototype, "inviterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], SpacePermissioner.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpacePermissioner.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], SpacePermissioner.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => permission_response_entity_1.PermissionResponse, (permissionResponse) => permissionResponse.spacePermissioner),
    __metadata("design:type", Array)
], SpacePermissioner.prototype, "permissionResponses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_history_entity_1.SpaceHistory, (spaceHistory) => spaceHistory.spacePermissioner),
    __metadata("design:type", Array)
], SpacePermissioner.prototype, "spaceHistories", void 0);
exports.SpacePermissioner = SpacePermissioner = __decorate([
    (0, typeorm_1.Entity)()
], SpacePermissioner);
//# sourceMappingURL=space-permissioner.entity.js.map