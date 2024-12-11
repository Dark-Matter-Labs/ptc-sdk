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
exports.CompleteWithIssueSpaceEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const complete_space_event_dto_1 = require("./complete-space-event.dto");
class CompleteWithIssueSpaceEventDto extends complete_space_event_dto_1.CompleteSpaceEventDto {
}
exports.CompleteWithIssueSpaceEventDto = CompleteWithIssueSpaceEventDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    (0, swagger_1.ApiPropertyOptional)({ description: 'SpaceEvent post event details' }),
    __metadata("design:type", String)
], CompleteWithIssueSpaceEventDto.prototype, "details", void 0);
//# sourceMappingURL=complete-with-issue-space-event.dto.js.map