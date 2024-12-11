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
exports.PermissionRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const type_1 = require("../../lib/type");
const rule_entity_1 = require("./rule.entity");
const space_event_entity_1 = require("./space-event.entity");
const space_entity_1 = require("./space.entity");
const permission_response_entity_1 = require("./permission-response.entity");
const space_approved_rule_entity_1 = require("./space-approved-rule.entity");
const space_history_entity_1 = require("./space-history.entity");
let PermissionRequest = class PermissionRequest {
};
exports.PermissionRequest = PermissionRequest;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_entity_1.Space, (user) => user.permissionRequests),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_entity_1.Space)
], PermissionRequest.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'PermissionRequest userId in uuid' }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_entity_1.Space, (space) => space.permissionRequests),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_entity_1.Space)
], PermissionRequest.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'PermissionRequest spaceId in uuid' }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_event_entity_1.SpaceEvent, (spaceEvent) => spaceEvent.permissionRequests),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_event_entity_1.SpaceEvent)
], PermissionRequest.prototype, "spaceEvent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'PermissionRequest spaceEventId' }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "spaceEventId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rule_entity_1.Rule, (rule) => rule.permissionRequests),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", rule_entity_1.Rule)
], PermissionRequest.prototype, "spaceRule", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'PermissionRequest spaceRuleId' }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "spaceRuleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rule_entity_1.Rule, (rule) => rule.permissionRequests),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", rule_entity_1.Rule)
], PermissionRequest.prototype, "spaceEventRule", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'PermissionRequest spaceEventRuleId' }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "spaceEventRuleId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'PermissionRequest status', default: 'pending' }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'PermissionRequest process type',
        default: type_1.PermissionProcessType.spaceEventPermissionRequestCreated,
    }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "processType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'PermissionRequest resolve status',
    }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "resolveStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'PermissionRequest permissionCode' }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "permissionCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'PermissionRequest resolveDetails' }),
    __metadata("design:type", String)
], PermissionRequest.prototype, "resolveDetails", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], PermissionRequest.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], PermissionRequest.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => permission_response_entity_1.PermissionResponse, (permissionResponse) => permissionResponse.permissionRequest),
    __metadata("design:type", Array)
], PermissionRequest.prototype, "permissionResponses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_approved_rule_entity_1.SpaceApprovedRule, (spaceApprovedRule) => spaceApprovedRule.permissionRequest),
    __metadata("design:type", Array)
], PermissionRequest.prototype, "spaceApprovedRules", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_history_entity_1.SpaceHistory, (spaceHistory) => spaceHistory.permissionRequest),
    __metadata("design:type", Array)
], PermissionRequest.prototype, "spaceHistories", void 0);
exports.PermissionRequest = PermissionRequest = __decorate([
    (0, typeorm_1.Entity)()
], PermissionRequest);
//# sourceMappingURL=permission-request.entity.js.map