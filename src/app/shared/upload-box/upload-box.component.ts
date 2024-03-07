import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-upload-box',
  templateUrl: './upload-box.component.html',
  styleUrl: './upload-box.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
})
export class UploadBoxComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  uploadBoxFormGroup: FormGroup;

  openFileSelection() {
    this.fileInput.nativeElement.click();
  }

  constructor(private _formBuilder: FormBuilder) {
    this.uploadBoxFormGroup = this._formBuilder.nonNullable.group({
      file: [],
    });
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    this.uploadBoxFormGroup.patchValue({ file: selectedFile });
  }

  clearForm(): void {
    this.uploadBoxFormGroup.reset();
  }
}
