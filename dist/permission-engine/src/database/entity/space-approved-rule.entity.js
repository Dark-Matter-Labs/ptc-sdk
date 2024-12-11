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
exports.SpaceApprovedRule = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const space_entity_1 = require("./space.entity");
const rule_entity_1 = require("./rule.entity");
const permission_request_entity_1 = require("./permission-request.entity");
let SpaceApprovedRule = class SpaceApprovedRule {
};
exports.SpaceApprovedRule = SpaceApprovedRule;
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_entity_1.Space, (space) => space.spaceApprovedRules),
    (0, typeorm_1.JoinColumn)({ name: 'space_id' }),
    __metadata("design:type", space_entity_1.Space)
], SpaceApprovedRule.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'space_id' }),
    __metadata("design:type", String)
], SpaceApprovedRule.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rule_entity_1.Rule, (rule) => rule.spaceApprovedRules),
    (0, typeorm_1.JoinColumn)({ name: 'rule_id' }),
    __metadata("design:type", rule_entity_1.Rule)
], SpaceApprovedRule.prototype, "rule", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'rule_id' }),
    __metadata("design:type", String)
], SpaceApprovedRule.prototype, "ruleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => permission_request_entity_1.PermissionRequest, (permissionRequest) => permissionRequest.spaceApprovedRules),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", permission_request_entity_1.PermissionRequest)
], SpaceApprovedRule.prototype, "permissionRequest", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], SpaceApprovedRule.prototype, "permissionRequestId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space approved rule public hash' }),
    __metadata("design:type", String)
], SpaceApprovedRule.prototype, "publicHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)({ description: 'Is space approved rule active' }),
    __metadata("design:type", Boolean)
], SpaceApprovedRule.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)({
        description: 'Space approved rule has public rule blocks only',
    }),
    __metadata("design:type", Boolean)
], SpaceApprovedRule.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, swagger_1.ApiProperty)({
        description: 'How many times the rule was utilized in the space',
    }),
    __metadata("design:type", Number)
], SpaceApprovedRule.prototype, "utilizationCount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpaceApprovedRule.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], SpaceApprovedRule.prototype, "updatedAt", void 0);
exports.SpaceApprovedRule = SpaceApprovedRule = __decorate([
    (0, typeorm_1.Entity)()
], SpaceApprovedRule);
//# sourceMappingURL=space-approved-rule.entity.js.map