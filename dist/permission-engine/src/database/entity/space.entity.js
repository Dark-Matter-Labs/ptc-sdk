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
exports.Space = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const space_event_entity_1 = require("./space-event.entity");
const user_entity_1 = require("./user.entity");
const rule_entity_1 = require("./rule.entity");
const permission_request_entity_1 = require("./permission-request.entity");
const space_permissioner_entity_1 = require("./space-permissioner.entity");
const space_image_entity_1 = require("./space-image.entity");
const space_approved_rule_entity_1 = require("./space-approved-rule.entity");
const space_topic_entity_1 = require("./space-topic.entity");
const space_history_entity_1 = require("./space-history.entity");
let Space = class Space {
};
exports.Space = Space;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], Space.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space name' }),
    __metadata("design:type", String)
], Space.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.externalServices),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Space.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space owner userId in uuid' }),
    __metadata("design:type", String)
], Space.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space zipcode' }),
    __metadata("design:type", String)
], Space.prototype, "zipcode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Country' }),
    __metadata("design:type", String)
], Space.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'State|Region' }),
    __metadata("design:type", String)
], Space.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'City' }),
    __metadata("design:type", String)
], Space.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'District' }),
    __metadata("design:type", String)
], Space.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Address' }),
    __metadata("design:type", String)
], Space.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Latitude in string' }),
    __metadata("design:type", String)
], Space.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Longitude in string' }),
    __metadata("design:type", String)
], Space.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)({ description: 'Is space active' }),
    __metadata("design:type", Boolean)
], Space.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rule_entity_1.Rule, (rule) => rule.spaces),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", rule_entity_1.Rule)
], Space.prototype, "rule", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space rule ruleId in uuid' }),
    __metadata("design:type", String)
], Space.prototype, "ruleId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space description' }),
    __metadata("design:type", String)
], Space.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space external link' }),
    __metadata("design:type", String)
], Space.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space timezone' }),
    __metadata("design:type", String)
], Space.prototype, "timezone", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], Space.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], Space.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_image_entity_1.SpaceImage, (spaceImage) => spaceImage.space),
    __metadata("design:type", Array)
], Space.prototype, "spaceImages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_topic_entity_1.SpaceTopic, (spaceTopic) => spaceTopic.space),
    __metadata("design:type", Array)
], Space.prototype, "spaceTopics", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_approved_rule_entity_1.SpaceApprovedRule, (spaceApprovedRule) => spaceApprovedRule.space),
    __metadata("design:type", Array)
], Space.prototype, "spaceApprovedRules", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_event_entity_1.SpaceEvent, (spaceEvent) => spaceEvent.space),
    __metadata("design:type", Array)
], Space.prototype, "spaceEvents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => permission_request_entity_1.PermissionRequest, (permissionRequest) => permissionRequest.space),
    __metadata("design:type", Array)
], Space.prototype, "permissionRequests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_permissioner_entity_1.SpacePermissioner, (SpacePermissioner) => SpacePermissioner.space),
    __metadata("design:type", Array)
], Space.prototype, "spacePermissioners", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_history_entity_1.SpaceHistory, (spaceHistory) => spaceHistory.space),
    __metadata("design:type", Array)
], Space.prototype, "spaceHistories", void 0);
exports.Space = Space = __decorate([
    (0, typeorm_1.Entity)()
], Space);
//# sourceMappingURL=space.entity.js.map