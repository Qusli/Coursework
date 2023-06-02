import { Injectable, CanActivate, ExecutionContext, HttpException } from '@nestjs/common'
import { UserServiceView } from '../user-view/user-view.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userServiceView: UserServiceView, private readonly jwt: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest()

      if(request.headers?.authorization == null || request.headers?.authorization == undefined){
        throw new HttpException("Войдите в аккаунт!", 404)
      }

      try{
        var token = this.extractTokenFromHeader(request)
        await this.jwt.verifyAsync(token)
      }
      catch{
        throw new HttpException("Токен истёк", 400)
      }

      const user = await this.userServiceView.GetUserByToken(token)

      request['user'] = user

      return true
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}