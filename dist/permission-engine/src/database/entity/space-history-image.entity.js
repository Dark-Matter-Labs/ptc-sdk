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
exports.SpaceHistoryImage = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const space_history_entity_1 = require("./space-history.entity");
let SpaceHistoryImage = class SpaceHistoryImage {
};
exports.SpaceHistoryImage = SpaceHistoryImage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], SpaceHistoryImage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_history_entity_1.SpaceHistory, (spaceHistory) => spaceHistory.spaceHistoryImages),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_history_entity_1.SpaceHistory)
], SpaceHistoryImage.prototype, "spaceHistory", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceHistoryImage.prototype, "spaceHistoryId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceHistoryImage.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpaceHistoryImage.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], SpaceHistoryImage.prototype, "updatedAt", void 0);
exports.SpaceHistoryImage = SpaceHistoryImage = __decorate([
    (0, typeorm_1.Entity)()
], SpaceHistoryImage);
//# sourceMappingURL=space-history-image.entity.js.map