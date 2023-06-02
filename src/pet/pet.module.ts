import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetController } from './controller/pet.controller';
import { PetEntity } from './model/pet.entity';
import { PetService } from './pet.service';
import { UserServiceView } from 'src/users/user-view/user-view.service';
import { UserEntityView } from 'src/users/user-view/model/user-view.entity';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [TypeOrmModule.forFeature([PetEntity, UserEntityView]), 
  JwtModule.register({
    secret: "SECRET_ROOT_PASSWORD",
    signOptions: {expiresIn: "24h"}
  })],
  providers: [PetService, UserServiceView],
  controllers: [PetController]
})
export class PetModule {}