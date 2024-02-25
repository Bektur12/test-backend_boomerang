import { Module } from '@nestjs/common';
import { TodoModule } from './todos/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos/entity/todo.entity';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '127.0.0.1',
      port: +process.env.DB_PORT || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'postgres',
      entities: [Todo],
      synchronize: false,
    }),
    TodoModule,
  ],
})
export class AppModule {}
