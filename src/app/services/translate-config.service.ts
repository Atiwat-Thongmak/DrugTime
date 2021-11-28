import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  languageDefault: any = 'en';
  languageall: any;
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'th']);
    this.translateService.setDefaultLang('en');

    this.languageall = translateService.getLangs();


    this.translateService.use('en');
  }

  changeLanguage(type: string) {
    this.translateService.use(type);
  }
}
