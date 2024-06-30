import { Body, Controller, HttpCode, InternalServerErrorException, NotFoundException, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { throwErrorHttp } from 'src/utils/http.error';
import { AuthDto } from './dtos/Auth.dto';
import { Request } from 'express';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}


    @HttpCode(201)
    @Post('/signup')
    async signUp(@Body() authDto: AuthDto){
        try{
            return await this.authService.createUser(authDto);
        }
        catch(error){
            throwErrorHttp(error);
        }
    }

    @HttpCode(200)
    @Post('/signin')
    async signIn(@Body() authDto: AuthDto, @Req() req: Request){
        try{
            if(await this.authService.login(authDto)){
                req.session.userId = authDto.userId;
            }
            else{
                throw new NotFoundException();
            }
        }
        catch(error){
            throwErrorHttp(error);
        }
    }
}
