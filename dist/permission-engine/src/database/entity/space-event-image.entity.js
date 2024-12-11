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
exports.SpaceEventImage = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const space_event_entity_1 = require("./space-event.entity");
const type_1 = require("../../lib/type");
let SpaceEventImage = class SpaceEventImage {
};
exports.SpaceEventImage = SpaceEventImage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], SpaceEventImage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_event_entity_1.SpaceEvent, (spaceEvent) => spaceEvent.spaceEventImages),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_event_entity_1.SpaceEvent)
], SpaceEventImage.prototype, "spaceEvent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceEventImage.prototype, "spaceEventId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceEventImage.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceEventImage.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpaceEventImage.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], SpaceEventImage.prototype, "updatedAt", void 0);
exports.SpaceEventImage = SpaceEventImage = __decorate([
    (0, typeorm_1.Entity)()
], SpaceEventImage);
//# sourceMappingURL=space-event-image.entity.js.map