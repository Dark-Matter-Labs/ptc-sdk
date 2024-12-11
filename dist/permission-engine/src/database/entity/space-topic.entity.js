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
exports.SpaceTopic = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const space_entity_1 = require("./space.entity");
const topic_entity_1 = require("./topic.entity");
let SpaceTopic = class SpaceTopic {
};
exports.SpaceTopic = SpaceTopic;
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_entity_1.Space, (space) => space.spaceTopics),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_entity_1.Space)
], SpaceTopic.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], SpaceTopic.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => topic_entity_1.Topic, (topic) => topic.spaceTopics),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", topic_entity_1.Topic)
], SpaceTopic.prototype, "topic", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], SpaceTopic.prototype, "topicId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpaceTopic.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], SpaceTopic.prototype, "updatedAt", void 0);
exports.SpaceTopic = SpaceTopic = __decorate([
    (0, typeorm_1.Entity)()
], SpaceTopic);
//# sourceMappingURL=space-topic.entity.js.map