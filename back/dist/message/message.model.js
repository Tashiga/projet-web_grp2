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
exports.Message = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
let Message = class Message {
};
exports.Message = Message;
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", Number)
], Message.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(type => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Message.prototype, "userFrom", void 0);
__decorate([
    (0, graphql_1.Field)(type => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Message.prototype, "userTo", void 0);
__decorate([
    (0, graphql_1.Field)(type => String),
    __metadata("design:type", String)
], Message.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", Number)
], Message.prototype, "conversationId", void 0);
__decorate([
    (0, graphql_1.Field)(type => String, { nullable: true }),
    __metadata("design:type", String)
], Message.prototype, "time", void 0);
exports.Message = Message = __decorate([
    (0, graphql_1.ObjectType)()
], Message);
//# sourceMappingURL=message.model.js.map