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
exports.SpaceHistoryTaskImage = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const space_history_task_entity_1 = require("./space-history-task.entity");
let SpaceHistoryTaskImage = class SpaceHistoryTaskImage {
};
exports.SpaceHistoryTaskImage = SpaceHistoryTaskImage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], SpaceHistoryTaskImage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_history_task_entity_1.SpaceHistoryTask, (spaceHistoryTask) => spaceHistoryTask.spaceHistoryTaskImages),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_history_task_entity_1.SpaceHistoryTask)
], SpaceHistoryTaskImage.prototype, "spaceHistoryTask", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceHistoryTaskImage.prototype, "spaceHistoryId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceHistoryTaskImage.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpaceHistoryTaskImage.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], SpaceHistoryTaskImage.prototype, "updatedAt", void 0);
exports.SpaceHistoryTaskImage = SpaceHistoryTaskImage = __decorate([
    (0, typeorm_1.Entity)()
], SpaceHistoryTaskImage);
//# sourceMappingURL=space-history-task-image.entity.js.map