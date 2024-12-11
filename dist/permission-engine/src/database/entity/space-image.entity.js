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
exports.SpaceImage = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const space_entity_1 = require("./space.entity");
const type_1 = require("../../lib/type");
let SpaceImage = class SpaceImage {
};
exports.SpaceImage = SpaceImage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], SpaceImage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => space_entity_1.Space, (space) => space.spaceImages),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", space_entity_1.Space)
], SpaceImage.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceImage.prototype, "spaceId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceImage.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpaceImage.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], SpaceImage.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], SpaceImage.prototype, "updatedAt", void 0);
exports.SpaceImage = SpaceImage = __decorate([
    (0, typeorm_1.Entity)()
], SpaceImage);
//# sourceMappingURL=space-image.entity.js.map