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
exports.RuleBlock = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const rule_entity_1 = require("./rule.entity");
const type_1 = require("../../lib/type");
let RuleBlock = class RuleBlock {
};
exports.RuleBlock = RuleBlock;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ description: 'uuid' }),
    __metadata("design:type", String)
], RuleBlock.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Rule block name' }),
    __metadata("design:type", String)
], RuleBlock.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Rule block hash' }),
    __metadata("design:type", String)
], RuleBlock.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.ruleBlocks),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], RuleBlock.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Rule block author userId in uuid' }),
    __metadata("design:type", String)
], RuleBlock.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Rule block type' }),
    __metadata("design:type", String)
], RuleBlock.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Rule block content' }),
    __metadata("design:type", String)
], RuleBlock.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Rule block details' }),
    __metadata("design:type", String)
], RuleBlock.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], RuleBlock.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'Created timestamp' }),
    __metadata("design:type", Date)
], RuleBlock.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Updated timestamp' }),
    __metadata("design:type", Date)
], RuleBlock.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => rule_entity_1.Rule, (rule) => rule.ruleBlocks),
    (0, typeorm_1.JoinTable)({ name: 'rule_rule_block' }),
    __metadata("design:type", rule_entity_1.Rule)
], RuleBlock.prototype, "rules", void 0);
exports.RuleBlock = RuleBlock = __decorate([
    (0, typeorm_1.Entity)()
], RuleBlock);
//# sourceMappingURL=rule-block.entity.js.map