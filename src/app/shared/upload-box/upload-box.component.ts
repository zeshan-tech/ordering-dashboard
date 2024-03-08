import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';

import { UploadBoxService } from './upload-box.service';

@Component({
  selector: 'app-upload-box',
  templateUrl: './upload-box.component.html',
  styleUrl: './upload-box.component.scss',
})
export class UploadBoxComponent {
  private _uploadBoxService: UploadBoxService = inject(UploadBoxService);
  
  @Output() imageUrlChange = new EventEmitter<string>();

  @ViewChild('fileInput') fileInput!: ElementRef;
  public imageUrl =
    'https://t3.ftcdn.net/jpg/06/71/33/46/360_F_671334604_ZBV26w9fERX8FCLUyDrCrLrZG6bq7h0Q.jpg';

  openFileSelection() {
    this.fileInput.nativeElement.click();
  }

  async onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    const url = await this._uploadBoxService.uploadImage(selectedFile);
    if (url) {
      this.imageUrl = url;
      this.imageUrlChange.emit(url); // Emitting the new imageUrl
    }
  }
}
