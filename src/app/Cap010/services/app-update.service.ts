import { Inject, Injectable } from '@angular/core';

@Injectable()
export class AppUpdateService {

  constructor(@Inject('USE_UPdate') private config: any) { }

  getAppUpdate(): string {
    const version = this.config.version;
    const enviroment = this.config.enviromemt;
    const appName = this.config.appName;

    return `Welcome to ${appName}, ${version} ${enviroment} enviroment`;
  }
}
