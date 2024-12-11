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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const user_notification_entity_1 = require("./user-notification.entity");
const space_event_entity_1 = require("./space-event.entity");
const external_service_entity_1 = require("./external-service.entity");
const rule_block_entity_1 = require("./rule-block.entity");
const rule_entity_1 = require("./rule.entity");
const space_permissioner_entity_1 = require("./space-permissioner.entity");
const topic_entity_1 = require("./topic.entity");
const space_history_entity_1 = require("./space-history.entity");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'User name in string' }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, swagger_1.ApiProperty)({ description: 'User email' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)({ description: 'Is user active' }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)({ description: 'Does user subscribe emails' }),
    __metadata("design:type", Boolean)
], User.prototype, "isSubscribe", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'individual' }),
    (0, swagger_1.ApiProperty)({
        description: 'User type: individual | organization | government',
    }),
    __metadata("design:type", String)
], User.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Year of birth in 4 digits' }),
    __metadata("design:type", Number)
], User.prototype, "birthYear", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Country' }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Region' }),
    __metadata("design:type", String)
], User.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'City' }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'District' }),
    __metadata("design:type", String)
], User.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Details' }),
    __metadata("design:type", String)
], User.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Profile Image' }),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_notification_entity_1.UserNotification, (userNotification) => userNotification.user),
    __metadata("design:type", Array)
], User.prototype, "userNotifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_event_entity_1.SpaceEvent, (spaceEvent) => spaceEvent.organizer),
    __metadata("design:type", Array)
], User.prototype, "spaceEvents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => external_service_entity_1.ExternalService, (externalService) => externalService.owner),
    __metadata("design:type", Array)
], User.prototype, "externalServices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rule_entity_1.Rule, (rule) => rule.author),
    __metadata("design:type", Array)
], User.prototype, "rules", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rule_block_entity_1.RuleBlock, (ruleBlock) => ruleBlock.author),
    __metadata("design:type", Array)
], User.prototype, "ruleBlocks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_permissioner_entity_1.SpacePermissioner, (spacePermissioner) => spacePermissioner.user),
    __metadata("design:type", Array)
], User.prototype, "spacePermissioners", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_permissioner_entity_1.SpacePermissioner, (spacePermissioner) => spacePermissioner.inviter),
    __metadata("design:type", Array)
], User.prototype, "spacePermissionerInviters", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_history_entity_1.SpaceHistory, (spacehistory) => spacehistory.logger),
    __metadata("design:type", Array)
], User.prototype, "spaceHistories", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => topic_entity_1.Topic, (topic) => topic.users),
    (0, typeorm_1.JoinTable)({ name: 'user_topic' }),
    __metadata("design:type", Array)
], User.prototype, "topics", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map