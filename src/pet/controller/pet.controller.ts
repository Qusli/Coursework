import { Controller, Get, Post, Put, Delete, Param, UseGuards, Query, Body, Request } from '@nestjs/common';
import { PetService } from '../pet.service';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { RoleGuard } from 'src/users/role/guard/role.guard';
import { Role } from 'src/users/role/decorator/role.decorator';
import { UserRole } from 'src/users/role/user-role/user-role';
import { PetDto } from '../dto/pet.dto';


@Controller('pet')
export class PetController {
    constructor(
        private readonly petService: PetService
    ){}

    @UseGuards(AuthGuard, RoleGuard)
    @Get("?")
    @Role(UserRole.admin)
    async GetAllPet(@Query('limit') limit: number, @Query("id") id: number){
        return this.petService.GetAllPet(limit, id)
    }

    @UseGuards(AuthGuard)
    @Get("user")
    async GetPetByUserId(@Request() req: any){
        return this.petService.GetPetByUserId(req.user.user_id)
    }

    @UseGuards(AuthGuard)
    @Post("create")
    async CreatePet(@Body() dto: PetDto, @Request() req: any){
        return this.petService.CreatePet(dto, req)
    }

    @UseGuards(AuthGuard)
    @Delete('delete/:id')
    async DeletePetByUserId(@Request() req: any, @Param("id") pet_id: number){
        return this.petService.DeletePetByUserId(req.user.user_id, pet_id)
    }

    @UseGuards(AuthGuard)
    @Put("update-data/:id")
    async UpdateData(@Param("id") id: number, @Body() dto: PetDto){
        return this.petService.UpdateData(id, dto)
    }
}