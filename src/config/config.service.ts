import { parse } from 'dotenv';
import * as joi from '@hapi/joi';
import * as fs from 'fs';

const envValidationSchema = joi.object({
  APP_URL: joi.string().uri({
    scheme: [/https?/],
  }),
  DB_URL: joi.string().regex(/^mongodb/),
});

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    const config = parse(fs.readFileSync(filePath));
    this.envConfig = ConfigService.validateInput(config);
  }

  private static validateInput(envConfig: EnvConfig): EnvConfig {
    const { error, value: validatedEnvConfig } =
      envValidationSchema.validate(envConfig);
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  isEnv(env: string): boolean {
    return this.envConfig.APP_ENV === env;
  }
}
