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
exports.RuleHistory = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const space_event_entity_1 = require("./space-event.entity");
const topic_entity_1 = require("./topic.entity");
let RuleHistory = class RuleHistory {
};
exports.RuleHistory = RuleHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space name' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space owner userId in uuid' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space zipcode' }),
    __metadata("design:type", Number)
], RuleHistory.prototype, "zipcode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Country' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'State|Region' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'City' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'District' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Address' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Latitude in string' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Longitude in string' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)({ description: 'Is space active' }),
    __metadata("design:type", Boolean)
], RuleHistory.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space rule ruleId in uuid' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "ruleId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'Space consent condition: {under|over|is}_{percent}_{yes|no}',
    }),
    __metadata("design:type", String)
], RuleHistory.prototype, "consentCondition", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Space description' }),
    __metadata("design:type", String)
], RuleHistory.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], RuleHistory.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], RuleHistory.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_event_entity_1.SpaceEvent, (spaceEvent) => spaceEvent.organizer),
    __metadata("design:type", Array)
], RuleHistory.prototype, "spaceEvents", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => topic_entity_1.Topic, (topic) => topic.spaceTopics),
    __metadata("design:type", Array)
], RuleHistory.prototype, "topics", void 0);
exports.RuleHistory = RuleHistory = __decorate([
    (0, typeorm_1.Entity)()
], RuleHistory);
//# sourceMappingURL=rule-history.entity.js.map