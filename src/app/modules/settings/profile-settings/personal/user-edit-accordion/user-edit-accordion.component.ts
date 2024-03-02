import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@supabase/supabase-js';

@Component({
  selector: 'app-user-edit-accordion',
  templateUrl: './user-edit-accordion.component.html',
  styleUrls: ['./user-edit-accordion.component.scss'],
})
export class UserEditAccordionComponent implements OnInit {
  currentUserFormGroup: FormGroup;

  constructor(
    private _authenticationService: AuthenticationService,
    private _formBuilder: FormBuilder
  ) {
    this.currentUserFormGroup = this._formBuilder.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      phone: [''],
      picture: [],
    });
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  private loadUserData(): void {
    this._authenticationService.getCurrentUser().subscribe((user) => {
      this.currentUserFormGroup.patchValue({
        email: user?.email,
        userName: user?.user_metadata['full_name'],
        phone: user?.phone,
      });
    });
  }

  async updateProfile(event: Event): Promise<Promise<Promise<Promise<void>>>> {
    event.preventDefault();
    let user: User;

    this._authenticationService
      .getCurrentUser()
      .subscribe(async (currentUser) => (user = currentUser!));

    const formValues = this.currentUserFormGroup.getRawValue();

    if (formValues.email !== user!.email) {
      await this._authenticationService.updateEmail(formValues.email);
    }

    if (formValues.phone !== user!.phone) {
      await this._authenticationService.updateEmail(formValues.phone);
    }

    let url = '';
    if (formValues.picture) {
      const result = await this._authenticationService.uploadPicture(
        formValues.picture
      );
      if (result) url = result;
    }

    await this._authenticationService.updateUserData({
      picture: url,
      userName: formValues.userName,
    });

    this.currentUserFormGroup.reset();
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    this.currentUserFormGroup.patchValue({ picture: selectedFile });
  }

  clearForm(): void {
    this.currentUserFormGroup.reset();
  }
}
