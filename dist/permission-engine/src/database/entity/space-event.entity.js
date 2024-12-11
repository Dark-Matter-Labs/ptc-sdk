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
exports.SpaceEvent = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const space_entity_1 = require("./space.entity");
const topic_entity_1 = require("./topic.entity");
const class_validator_1 = require("class-validator");
const type_1 = require("../../lib/type");
const rule_entity_1 = require("./rule.entity");
const permission_request_entity_1 = require("./permission-request.entity");
const external_service_entity_1 = require("./external-service.entity");
const space_event_image_entity_1 = require("./space-event-image.entity");
const space_history_entity_1 = require("./space-history.entity");
let SpaceEvent = class SpaceEvent {
};
exports.SpaceEvent = SpaceEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], SpaceEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Event name' }),
    __metadata("design:type", String)
], SpaceEvent.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.spaceEvents),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], SpaceEvent.prototype, "organizer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Event organizer userId in uuid' }),
    __metadata("design:type", String)
], SpaceEvent.prototype, "organizerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_entity_1.Space, (space) => space.spaceEvents),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_entity_1.Space)
], SpaceEvent.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceEvent.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rule_entity_1.Rule, (rule) => rule.spaces),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", rule_entity_1.Rule)
], SpaceEvent.prototype, "rule", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceEvent ruleId in uuid' }),
    __metadata("design:type", String)
], SpaceEvent.prototype, "ruleId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceEvent.prototype, "permissionRequestId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => external_service_entity_1.ExternalService, (externalService) => externalService.spaceEvents),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", external_service_entity_1.ExternalService)
], SpaceEvent.prototype, "externalService", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceEvent.prototype, "externalServiceId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEvent status: pending|permission_requested|permission_approved|permission_rejected|running|closed|complete',
    }),
    __metadata("design:type", String)
], SpaceEvent.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceEvent.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], SpaceEvent.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceEvent.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceEvent.prototype, "callbackLink", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SpaceEvent.prototype, "attendeeCount", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Object)
], SpaceEvent.prototype, "report", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEvent duration in {number}{d|w|M|y|h|m|s} format',
    }),
    (0, class_validator_1.Matches)(/^\d+[dwMyhms]$/, {
        message: 'SpaceEvent duration must in format: {number}{d|w|M|y|h|m|s}',
    }),
    __metadata("design:type", String)
], SpaceEvent.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceEvent start timestamp' }),
    __metadata("design:type", Date)
], SpaceEvent.prototype, "startsAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceEvent end timestamp' }),
    __metadata("design:type", Date)
], SpaceEvent.prototype, "endsAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpaceEvent.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], SpaceEvent.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => permission_request_entity_1.PermissionRequest, (permissionRequest) => permissionRequest.space),
    __metadata("design:type", Array)
], SpaceEvent.prototype, "permissionRequests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_event_image_entity_1.SpaceEventImage, (spaceEventImage) => spaceEventImage.spaceEvent),
    __metadata("design:type", Array)
], SpaceEvent.prototype, "spaceEventImages", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => topic_entity_1.Topic, (topic) => topic.spaceEvents),
    (0, typeorm_1.JoinTable)({ name: 'space_event_topic' }),
    __metadata("design:type", Array)
], SpaceEvent.prototype, "topics", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_history_entity_1.SpaceHistory, (spaceHistory) => spaceHistory.spaceEvent),
    __metadata("design:type", Array)
], SpaceEvent.prototype, "spaceHistories", void 0);
exports.SpaceEvent = SpaceEvent = __decorate([
    (0, typeorm_1.Entity)()
], SpaceEvent);
//# sourceMappingURL=space-event.entity.js.map