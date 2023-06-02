import { Module } from '@nestjs/common';
import { UserModule } from './users/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RoleModule } from './users/role/role.module';
import { PetModule } from './pet/pet.module';
import { ServiceModule } from './service/service.module';
import { PersonalModule } from './personal/personal.module';
import { RecordModule } from './record/record.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "db.gwmcjildsnadatctavga.supabase.co",
    port: 5432,
    username: "postgres",
    password: "zsxdcfvg123F",
    database: "postgres",
    entities: [join(__dirname, "**", "*.entity.{ts,js}")],
    synchronize: false,
  }), UserModule, RoleModule, PetModule, ServiceModule, PersonalModule, RecordModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
