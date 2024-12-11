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
exports.Topic = void 0;
const typeorm_1 = require("typeorm");
const space_event_entity_1 = require("./space-event.entity");
const swagger_1 = require("@nestjs/swagger");
const rule_entity_1 = require("./rule.entity");
const space_topic_entity_1 = require("./space-topic.entity");
const user_entity_1 = require("./user.entity");
let Topic = class Topic {
};
exports.Topic = Topic;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], Topic.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Topic author userId in uuid' }),
    __metadata("design:type", String)
], Topic.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Topic name in string' }),
    __metadata("design:type", String)
], Topic.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Topic.prototype, "translation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Topic icon' }),
    __metadata("design:type", String)
], Topic.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Country' }),
    __metadata("design:type", String)
], Topic.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Region' }),
    __metadata("design:type", String)
], Topic.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'City' }),
    __metadata("design:type", String)
], Topic.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Topic detail in string' }),
    __metadata("design:type", String)
], Topic.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)({ description: 'Is topic active' }),
    __metadata("design:type", Boolean)
], Topic.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], Topic.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], Topic.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_topic_entity_1.SpaceTopic, (spaceTopic) => spaceTopic.space),
    __metadata("design:type", Array)
], Topic.prototype, "spaceTopics", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => space_event_entity_1.SpaceEvent, (spaceEvent) => spaceEvent.topics),
    (0, typeorm_1.JoinTable)({ name: 'space_event_topic' }),
    __metadata("design:type", Array)
], Topic.prototype, "spaceEvents", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => rule_entity_1.Rule, (rule) => rule.topics),
    (0, typeorm_1.JoinTable)({ name: 'rule_topic' }),
    __metadata("design:type", Array)
], Topic.prototype, "rules", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.topics),
    (0, typeorm_1.JoinTable)({ name: 'rule_topic' }),
    __metadata("design:type", Array)
], Topic.prototype, "users", void 0);
exports.Topic = Topic = __decorate([
    (0, typeorm_1.Entity)()
], Topic);
//# sourceMappingURL=topic.entity.js.map