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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const conversation_model_1 = require("./conversation.model");
const message_model_1 = require("../message/message.model");
const bull_1 = require("@nestjs/bull");
let ConversationResolver = class ConversationResolver {
    constructor(messageQueue) {
        this.messageQueue = messageQueue;
        this.conversations = [];
    }
    getUserConversations(userId) {
        return this.conversations.filter(conversation => conversation.users.some(user => user.id === userId));
    }
    getConversationMessages(conversationId) {
        const conversation = this.conversations.find(conv => conv.id === conversationId);
        return conversation ? conversation.messages : [];
    }
    createConversation(user1Id, user2Id) {
        const newConversation = {
            id: this.conversations.length + 1,
            users: [{ id: user1Id, username: 'User1', passeword: 'pass1' }, { id: user2Id, username: 'User2', passeword: 'pass2' }],
            messages: []
        };
        this.conversations.push(newConversation);
        return newConversation;
    }
    async sendMessage(conversationId, userFromId, userToId, message, time) {
        const conversation = this.conversations.find(conv => conv.id === conversationId);
        if (!conversation)
            throw new Error('Conversation not found');
        const newMessage = {
            id: conversation.messages.length + 1,
            userFrom: { id: userFromId, username: 'UserFrom', passeword: 'passFrom' },
            userTo: { id: userToId, username: 'UserTo', passeword: 'passTo' },
            message,
            conversationId,
            time: time || new Date().toISOString()
        };
        conversation.messages.push(newMessage);
        await this.messageQueue.add('sendMessage', newMessage);
        console.log("All OK !");
        return newMessage;
    }
};
exports.ConversationResolver = ConversationResolver;
__decorate([
    (0, graphql_1.Query)(returns => [conversation_model_1.Conversation]),
    __param(0, (0, graphql_1.Args)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Array)
], ConversationResolver.prototype, "getUserConversations", null);
__decorate([
    (0, graphql_1.Query)(returns => [message_model_1.Message]),
    __param(0, (0, graphql_1.Args)('conversationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Array)
], ConversationResolver.prototype, "getConversationMessages", null);
__decorate([
    (0, graphql_1.Mutation)(returns => conversation_model_1.Conversation),
    __param(0, (0, graphql_1.Args)('user1Id')),
    __param(1, (0, graphql_1.Args)('user2Id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", conversation_model_1.Conversation)
], ConversationResolver.prototype, "createConversation", null);
__decorate([
    (0, graphql_1.Mutation)(returns => message_model_1.Message),
    __param(0, (0, graphql_1.Args)('conversationId')),
    __param(1, (0, graphql_1.Args)('userFromId')),
    __param(2, (0, graphql_1.Args)('userToId')),
    __param(3, (0, graphql_1.Args)('message')),
    __param(4, (0, graphql_1.Args)('time', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], ConversationResolver.prototype, "sendMessage", null);
exports.ConversationResolver = ConversationResolver = __decorate([
    (0, graphql_1.Resolver)(of => conversation_model_1.Conversation),
    __param(0, (0, bull_1.InjectQueue)('health-queue')),
    __metadata("design:paramtypes", [Object])
], ConversationResolver);
//# sourceMappingURL=conversation.resolver.js.map