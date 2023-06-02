import { Controller, UseGuards, Get, Put, Delete, Post, Query, Body, Param } from '@nestjs/common';
import { ServiceService } from '../service.service';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { RoleGuard } from 'src/users/role/guard/role.guard';
import { Role } from 'src/users/role/decorator/role.decorator';
import { UserRole } from 'src/users/role/user-role/user-role';
import { ServiceDto } from '../dto/service.dto';

@Controller('service')
export class ServiceController {
    constructor(
        private readonly serviceService: ServiceService
    ){}


    @Get("?")
    async GetAllPersonal(@Query("limit") limit: number){
        return await this.serviceService.GetAllService(limit)
    }


    @Post("create")
    async CreatePersonal(@Body() dto: ServiceDto){
        return await this.serviceService.CreateService(dto)
    }

    @UseGuards(AuthGuard, RoleGuard)
    @Delete("delete/:id")
    @Role(UserRole.admin)
    async DeletePersonal(@Param("id") id: number){
        return await this.serviceService.DeleteService(id)
    }

    @UseGuards(AuthGuard, RoleGuard)
    @Put("update/:id")
    @Role(UserRole.admin)
    async UpdatePersonal(@Param("id") id: number, @Body() dto: ServiceDto){
        return await this.serviceService.UpdateService(id, dto)
    }
}
