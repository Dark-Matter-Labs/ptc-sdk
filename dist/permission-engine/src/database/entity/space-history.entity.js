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
exports.SpaceHistory = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const type_1 = require("../../lib/type");
const space_entity_1 = require("./space.entity");
const rule_entity_1 = require("./rule.entity");
const space_permissioner_entity_1 = require("./space-permissioner.entity");
const space_event_entity_1 = require("./space-event.entity");
const permission_request_entity_1 = require("./permission-request.entity");
const user_entity_1 = require("./user.entity");
let SpaceHistory = class SpaceHistory {
};
exports.SpaceHistory = SpaceHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_entity_1.Space, (space) => space.spaceHistories),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_entity_1.Space)
], SpaceHistory.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory spaceId in uuid' }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rule_entity_1.Rule, (rule) => rule.spaceHistories),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", rule_entity_1.Rule)
], SpaceHistory.prototype, "rule", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory ruleId in uuid' }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "ruleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.spaceHistories),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], SpaceHistory.prototype, "logger", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory loggerId in uuid' }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "loggerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "spaceHistoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SpaceHistory, (spaceHistory) => spaceHistory.childHistories, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'space_history_id' }),
    __metadata("design:type", SpaceHistory)
], SpaceHistory.prototype, "parentHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SpaceHistory, (spaceHistory) => spaceHistory.parentHistory),
    __metadata("design:type", Array)
], SpaceHistory.prototype, "childHistories", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_permissioner_entity_1.SpacePermissioner, (spacePermissioner) => spacePermissioner.spaceHistories),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_permissioner_entity_1.SpacePermissioner)
], SpaceHistory.prototype, "spacePermissioner", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory spacePermissionerId in uuid' }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "spacePermissionerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_event_entity_1.SpaceEvent, (spaceEvent) => spaceEvent.spaceHistories),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_event_entity_1.SpaceEvent)
], SpaceHistory.prototype, "spaceEvent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory spaceEventId in uuid' }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "spaceEventId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => permission_request_entity_1.PermissionRequest, (permissionRequest) => permissionRequest.spaceHistories),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", permission_request_entity_1.PermissionRequest)
], SpaceHistory.prototype, "permissionRequest", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory permissionRequestId in uuid' }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "permissionRequestId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)({ description: 'Is SpaceHistory public' }),
    __metadata("design:type", Boolean)
], SpaceHistory.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceHistory type',
    }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory title' }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory description' }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory image' }),
    __metadata("design:type", String)
], SpaceHistory.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpaceHistory.prototype, "createdAt", void 0);
exports.SpaceHistory = SpaceHistory = __decorate([
    (0, typeorm_1.Entity)()
], SpaceHistory);
//# sourceMappingURL=space-history.entity.js.map