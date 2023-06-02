import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './model/user.entity';
import { UserEntityView } from '../user-view/model/user-view.entity';
import { UserServiceView } from '../user-view/user-view.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserEntityView]), 
            JwtModule.register({
              secret: "SECRET_ROOT_PASSWORD",
              signOptions: {expiresIn: "24h"}
            })],
  providers: [UserService, UserServiceView],
  controllers: [UserController]
})
export class UserModule {}
