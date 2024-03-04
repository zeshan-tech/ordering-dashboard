import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages-menu',
  templateUrl: './languages-menu.component.html',
  styleUrl: './languages-menu.component.scss',
})
export class LanguagesMenuComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('en');
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
