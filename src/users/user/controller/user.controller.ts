import { Controller, Query, Body, Param, Get, Post, Put, Delete, UseGuards, Request, HttpException  } from '@nestjs/common';
import { UserServiceView } from 'src/users/user-view/user-view.service';
import { UserService } from '../user.service';
import { UserDto } from '../dto/user.dto';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { Role } from 'src/users/role/decorator/role.decorator';
import { UserRole } from 'src/users/role/user-role/user-role';
import { RoleGuard } from 'src/users/role/guard/role.guard';

@Controller('users')
export class UserController {
    constructor(
        private readonly userServiceView : UserServiceView,
        private readonly userService: UserService
    ){}

    @Post("registration")
    async Registration(@Body() dto: UserDto){
        return await this.userService.Registration(dto);
    }

    @Post("login")
    async Login(@Body() dto: UserDto){
        return await this.userService.Login(dto);
    }

    @UseGuards(AuthGuard)
    @Post("logout")
    async LogOut(@Body() dto: UserDto){
        return await this.userService.LogOut(dto.email);
    }

    @UseGuards(AuthGuard, RoleGuard)
    @Get("?")
    @Role(UserRole.admin)
    async GetAllUsers(@Query("limit") limit: number, @Query("id") id: number){
        return await this.userServiceView.GetAllUsers(limit, id);
    }

    @UseGuards(AuthGuard, RoleGuard)
    @Get("admin?")
    @Role(UserRole.admin)
    async GetAllAdmin(@Query("limit") limit: number, @Query("id") id: number){
        return await this.userServiceView.GetAllAdmins(limit, id);
    }

    @UseGuards(AuthGuard)
    @Get("token")
    async GetUserByToken(@Request() req: any){
        if(req.user?.token == null) throw new HttpException("Войдите в аккаунт!", 400)
        return await this.userServiceView.GetUserByToken(req.user?.token)
    }

    @UseGuards(AuthGuard, RoleGuard)
    @Delete("delete/:id")
    @Role(UserRole.admin)
    async DeleteUser(@Param() id: number){
        return this.userService.DeleteUserById(id)
    }

    @UseGuards(AuthGuard, RoleGuard)
    @Put("update-role/:id")
    @Role(UserRole.admin)
    async UpdateRole(@Param('id') id: number, @Body() dto: UserDto){
        return this.userService.UpdateRole(id, dto)
    }

    @UseGuards(AuthGuard)
    @Put("update-password")
    async UpdatePassword(@Request() req: any, @Body() dto: UserDto){
        if(req.user?.token == null) throw new HttpException("Войдите в аккаунт!", 400)
        return this.userService.UpdatePassword(req.user?.token, dto)
    }

    @UseGuards(AuthGuard)
    @Put("update-data")
    async UpdateDataUser(@Request() req: any, @Body() dto: UserDto){
        return this.userService.UpdateDataUser(req.user?.token, dto)
    }
}
