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
exports.Conversation = void 0;
const graphql_1 = require("@nestjs/graphql");
const message_model_1 = require("../message/message.model");
const user_model_1 = require("../user/user.model");
let Conversation = class Conversation {
};
exports.Conversation = Conversation;
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", Number)
], Conversation.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(type => [user_model_1.User]),
    __metadata("design:type", Array)
], Conversation.prototype, "users", void 0);
__decorate([
    (0, graphql_1.Field)(type => [message_model_1.Message]),
    __metadata("design:type", Array)
], Conversation.prototype, "messages", void 0);
exports.Conversation = Conversation = __decorate([
    (0, graphql_1.ObjectType)()
], Conversation);
//# sourceMappingURL=conversation.model.js.map