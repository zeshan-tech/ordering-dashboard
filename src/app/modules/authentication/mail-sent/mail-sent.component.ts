import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mail-sent',
  templateUrl: './mail-sent.component.html',
  styleUrl: './mail-sent.component.scss',
})
export class MailSentComponent {
  logoUrl: SafeResourceUrl;

  constructor(
    private _sanitizer: DomSanitizer,
  ) {
    this.logoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      '../../../../assets/company-logo.svg'
    );
  }
}
