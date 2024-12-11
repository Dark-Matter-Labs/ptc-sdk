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
exports.CreateTopicDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTopicDto {
    constructor() {
        this.country = 'common';
        this.region = 'common';
        this.city = 'common';
    }
}
exports.CreateTopicDto = CreateTopicDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ description: 'Topic name', required: true }),
    __metadata("design:type", String)
], CreateTopicDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Country', nullable: true }),
    __metadata("design:type", String)
], CreateTopicDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiPropertyOptional)({ description: 'State|Region', nullable: true }),
    __metadata("design:type", String)
], CreateTopicDto.prototype, "region", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiPropertyOptional)({ description: 'City', nullable: true }),
    __metadata("design:type", String)
], CreateTopicDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    (0, swagger_1.ApiProperty)({ description: 'Topic details', required: true }),
    __metadata("design:type", String)
], CreateTopicDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Topic translation in json',
        nullable: true,
    }),
    __metadata("design:type", Object)
], CreateTopicDto.prototype, "translation", void 0);
//# sourceMappingURL=create-topic.dto.js.map