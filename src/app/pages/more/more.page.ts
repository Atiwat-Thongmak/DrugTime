import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {
  languageDefault: any;

  constructor(private translateConfigService: TranslateConfigService) {
    console.log('translateConfigService', translateConfigService.languageall);
  }

  ngOnInit() {}

  changeLanguage(lang: string) {
    console.log('changeLanguage: ', lang);

    this.translateConfigService.changeLanguage(lang);
  }
}
