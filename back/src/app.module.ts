import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health/health.controller';
import { BullModule } from '@nestjs/bull'; // Importez BullModule
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { HealthResolver } from './health/health.resolver';
import { ConversationResolver } from './conversation/conversation.resolver';
import { UserResolver } from './user/user.resolver';
import { MessageResolver } from './message/message.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }),
    BullModule.forRoot({
      // Configurez BullModule
      redis: {
        host: process.env.REDIS_HOST,
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'health-queue',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, HealthResolver, ConversationResolver, UserResolver, MessageResolver],
})
export class AppModule {}
