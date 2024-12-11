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
exports.Rule = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const type_1 = require("../../lib/type");
const space_event_entity_1 = require("./space-event.entity");
const space_entity_1 = require("./space.entity");
const rule_block_entity_1 = require("./rule-block.entity");
const permission_request_entity_1 = require("./permission-request.entity");
const topic_entity_1 = require("./topic.entity");
const space_approved_rule_entity_1 = require("./space-approved-rule.entity");
const space_history_entity_1 = require("./space-history.entity");
let Rule = class Rule {
};
exports.Rule = Rule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], Rule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Rule name' }),
    __metadata("design:type", String)
], Rule.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Rule hash' }),
    __metadata("design:type", String)
], Rule.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'Rule public hash: hash result for public rule blocks',
    }),
    __metadata("design:type", String)
], Rule.prototype, "publicHash", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.rules),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Rule.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Rule author userId in uuid' }),
    __metadata("design:type", String)
], Rule.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Rule, (rule) => rule.childRules),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Rule)
], Rule.prototype, "parentRule", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Rule, (rule) => rule.parentRule),
    __metadata("design:type", Array)
], Rule.prototype, "childRules", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({ description: 'Rule parentRuleId in uuid' }),
    __metadata("design:type", String)
], Rule.prototype, "parentRuleId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Rule target: space|space_event' }),
    __metadata("design:type", String)
], Rule.prototype, "target", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Rule.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], Rule.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], Rule.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_entity_1.Space, (space) => space.rule),
    __metadata("design:type", Array)
], Rule.prototype, "spaces", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_event_entity_1.SpaceEvent, (spaceEvent) => spaceEvent.rule),
    __metadata("design:type", Array)
], Rule.prototype, "spaceEvents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_approved_rule_entity_1.SpaceApprovedRule, (spaceApprovedRule) => spaceApprovedRule.rule),
    __metadata("design:type", Array)
], Rule.prototype, "spaceApprovedRules", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => rule_block_entity_1.RuleBlock, (ruleBlock) => ruleBlock.rules),
    (0, typeorm_1.JoinTable)({ name: 'rule_rule_block' }),
    __metadata("design:type", Array)
], Rule.prototype, "ruleBlocks", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => topic_entity_1.Topic, (topic) => topic.rules),
    (0, typeorm_1.JoinTable)({ name: 'rule_topic' }),
    __metadata("design:type", Array)
], Rule.prototype, "topics", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => permission_request_entity_1.PermissionRequest, (permissionRequest) => permissionRequest.space),
    __metadata("design:type", Array)
], Rule.prototype, "permissionRequests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_history_entity_1.SpaceHistory, (spaceHistory) => spaceHistory.rule),
    __metadata("design:type", Array)
], Rule.prototype, "spaceHistories", void 0);
exports.Rule = Rule = __decorate([
    (0, typeorm_1.Entity)()
], Rule);
//# sourceMappingURL=rule.entity.js.map