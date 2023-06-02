import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './model/role.entity';


@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  providers: [],
  controllers: []
})
export class RoleModule {}
