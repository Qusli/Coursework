import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './controller/personal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalEntity } from './model/personal.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserEntityView } from 'src/users/user-view/model/user-view.entity';
import { UserServiceView } from 'src/users/user-view/user-view.service';

@Module({
  providers: [PersonalService, UserServiceView],
  controllers: [PersonalController],
  imports: [TypeOrmModule.forFeature([PersonalEntity, UserEntityView]),
  JwtModule.register({
    secret: "hard!to-guess_secret",
    signOptions: {expiresIn: "24h"}
  })]
})
export class PersonalModule {}
