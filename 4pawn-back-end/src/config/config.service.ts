import { ConfigService } from '@nestjs/config';
import configuration from './';
import DatabaseEnv from './types/index';

export default class Envs {
  private static service = new ConfigService(configuration());

  public static appPort(): number {
    return Envs.service.get<number>('port');
  }
  public static jwtSecret(): string {
    return Envs.service.get<string>('jwt_secret');
  }
  public static database(): DatabaseEnv {
    return Envs.service.get<DatabaseEnv>('database');
  }
}
