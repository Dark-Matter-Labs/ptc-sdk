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
exports.SpaceHistoryTask = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const space_entity_1 = require("./space.entity");
const user_entity_1 = require("./user.entity");
const space_history_entity_1 = require("./space-history.entity");
const space_history_task_image_entity_1 = require("./space-history-task-image.entity");
const type_1 = require("../../lib/type");
let SpaceHistoryTask = class SpaceHistoryTask {
};
exports.SpaceHistoryTask = SpaceHistoryTask;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], SpaceHistoryTask.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_entity_1.Space, (space) => space.spaceHistories),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_entity_1.Space)
], SpaceHistoryTask.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory spaceId in uuid' }),
    __metadata("design:type", String)
], SpaceHistoryTask.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.spaceHistoryTaskCreators),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], SpaceHistoryTask.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory creatorId in uuid' }),
    __metadata("design:type", String)
], SpaceHistoryTask.prototype, "creatorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.spaceHistoryTaskResolvers),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], SpaceHistoryTask.prototype, "resolver", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory resolverId in uuid' }),
    __metadata("design:type", String)
], SpaceHistoryTask.prototype, "resolverId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_history_entity_1.SpaceHistory, (spaceHistory) => spaceHistory.spaceHistoryTasks),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_history_entity_1.SpaceHistory)
], SpaceHistoryTask.prototype, "spaceHistory", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory spaceId in uuid' }),
    __metadata("design:type", String)
], SpaceHistoryTask.prototype, "spaceHistoryId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'SpaceEvent status: pending|resolved',
    }),
    __metadata("design:type", String)
], SpaceHistoryTask.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory title' }),
    __metadata("design:type", String)
], SpaceHistoryTask.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'SpaceHistory description' }),
    __metadata("design:type", String)
], SpaceHistoryTask.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => space_history_task_image_entity_1.SpaceHistoryTaskImage, (spaceHistoryTaskImage) => spaceHistoryTaskImage.spaceHistoryTask),
    __metadata("design:type", Array)
], SpaceHistoryTask.prototype, "spaceHistoryTaskImages", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpaceHistoryTask.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], SpaceHistoryTask.prototype, "updatedAt", void 0);
exports.SpaceHistoryTask = SpaceHistoryTask = __decorate([
    (0, typeorm_1.Entity)()
], SpaceHistoryTask);
//# sourceMappingURL=space-history-task.entity.js.map