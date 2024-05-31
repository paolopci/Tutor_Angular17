import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

  getAppConfig(): any {
    return {
      version: '1.0.0',
      enviroment: 'production',
      appName: 'my-app'
    }
  }
}
