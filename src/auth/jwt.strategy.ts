import { ExtractJwt, Strategy } from 'passport-jwt';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ingnoreExpirateion: false,
      secretOrKey: configService.get('JWT_SECREATE_KEY'),
    });
  }
  async validate(payload: any) {
    // TODK. payload로 전달된 데이터를 통해 실제 유저 정보를 조회해야 해요!
  }
}
