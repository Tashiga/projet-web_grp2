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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
let UserResolver = class UserResolver {
    constructor() {
        this.users = [];
    }
    getUsers() {
        return this.users;
    }
    getUser(id) {
        return this.users.find(user => user.id === id);
    }
    createUser(username, passeword) {
        const newUser = {
            id: this.users.length + 1,
            username,
            passeword,
        };
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id, username, passeword) {
        const user = this.users.find(user => user.id === id);
        if (!user)
            throw new Error('User not found');
        if (username)
            user.username = username;
        if (passeword)
            user.passeword = passeword;
        return user;
    }
    deleteUser(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1)
            throw new Error('User not found');
        this.users.splice(userIndex, 1);
        return true;
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Query)(returns => [user_model_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UserResolver.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.Query)(returns => user_model_1.User),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", user_model_1.User)
], UserResolver.prototype, "getUser", null);
__decorate([
    (0, graphql_1.Mutation)(returns => user_model_1.User),
    __param(0, (0, graphql_1.Args)('username')),
    __param(1, (0, graphql_1.Args)('passeword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", user_model_1.User)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(returns => user_model_1.User),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('username', { nullable: true })),
    __param(2, (0, graphql_1.Args)('passeword', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", user_model_1.User)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(returns => Boolean),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Boolean)
], UserResolver.prototype, "deleteUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(of => user_model_1.User)
], UserResolver);
//# sourceMappingURL=user.resolver.js.map