import { Injectable, CanActivate, ExecutionContext, HttpException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { UserRole } from '../user-role/user-role';


@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<UserRole[]>("role", context.getHandler());

    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

    if(user == null || user == undefined) {
      throw new HttpException("Войдите в аккаунт!", 404)
    }

    for(let i = 0; i < requiredRoles.length; ++i){
      return requiredRoles[i].includes(user.role)
    }
  }
}