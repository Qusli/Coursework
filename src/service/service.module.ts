import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './controller/service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from './model/service.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserEntityView } from 'src/users/user-view/model/user-view.entity';
import { UserServiceView } from 'src/users/user-view/user-view.service';

@Module({
  providers: [ServiceService, UserServiceView],
  controllers: [ServiceController],
  imports: [TypeOrmModule.forFeature([ServiceEntity, UserEntityView]),
  JwtModule.register({
    secret: "SECRET_ROOT_PASSWORD",
    signOptions: {expiresIn: "24h"}
  })]
})
export class ServiceModule {}
