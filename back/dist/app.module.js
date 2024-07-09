"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const redisStore = require("cache-manager-redis-store");
const config_1 = require("@nestjs/config");
const health_controller_1 = require("./health/health.controller");
const bull_1 = require("@nestjs/bull");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const health_resolver_1 = require("./health/health.resolver");
const conversation_resolver_1 = require("./conversation/conversation.resolver");
const user_resolver_1 = require("./user/user.resolver");
const message_resolver_1 = require("./message/message.resolver");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            cache_manager_1.CacheModule.register({
                isGlobal: true,
                store: redisStore,
                host: process.env.REDIS_HOST,
                port: process.env.REDIS_PORT,
            }),
            bull_1.BullModule.forRoot({
                redis: {
                    host: process.env.REDIS_HOST,
                    port: 6379,
                },
            }),
            bull_1.BullModule.registerQueue({
                name: 'health-queue',
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
            }),
        ],
        controllers: [app_controller_1.AppController, health_controller_1.HealthController],
        providers: [app_service_1.AppService, health_resolver_1.HealthResolver, conversation_resolver_1.ConversationResolver, user_resolver_1.UserResolver, message_resolver_1.MessageResolver],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map