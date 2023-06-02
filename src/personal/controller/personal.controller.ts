import { Controller, UseGuards, Get, Put, Delete, Post, Query, Body, Param } from '@nestjs/common';
import { PersonalService } from '../personal.service';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { RoleGuard } from 'src/users/role/guard/role.guard';
import { Role } from 'src/users/role/decorator/role.decorator';
import { UserRole } from 'src/users/role/user-role/user-role';
import { PersonalDto } from '../dto/personal.dto';

@Controller('personal')
export class PersonalController {
    constructor(
        private readonly personalService: PersonalService
    ){}

    @UseGuards(AuthGuard, RoleGuard)
    @Get("?")
    @Role(UserRole.admin)
    async GetAllPersonal(@Query("limit") limit: number){
        return await this.personalService.GetAllPersonal(limit)
    }

    @UseGuards(AuthGuard, RoleGuard)
    @Post("create")
    @Role(UserRole.admin)
    async CreatePersonal(@Body() dto: PersonalDto){
        return await this.personalService.CreatePersonal(dto)
    }

    @UseGuards(AuthGuard, RoleGuard)
    @Delete("delete/:id")
    @Role(UserRole.admin)
    async DeletePersonal(@Param("id") id: number){
        return await this.personalService.DeletePersonal(id)
    }

    @UseGuards(AuthGuard, RoleGuard)
    @Put("update/:id")
    @Role(UserRole.admin)
    async UpdatePersonal(@Param("id") id: number, @Body() dto: PersonalDto){
        return await this.personalService.UpdatePersonal(id, dto)
    }
}
