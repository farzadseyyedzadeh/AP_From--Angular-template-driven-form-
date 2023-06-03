import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('f', { static: false })
  signupForm!: NgForm;
  genders = ['آقا', 'خانم'];
  militaryService = ['معافیت دائم', 'معافیت تحصیلی', ' پایان خدمت'];
  maritalStatus = ['مجرد', 'متاهل'];
  user = {
    fullName: '',
    gender: '',
    military: '',
    marital: '',
    email: '',
    number: '',
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.fullName = this.signupForm.value.userData.fullName;
    this.user.gender = this.signupForm.value.gender;
    this.user.military = this.signupForm.value.userData.military;
    this.user.marital = this.signupForm.value.userData.marital;
    this.user.email = this.signupForm.value.userData.email;
    this.user.number = this.signupForm.value.userData.number;

    this.signupForm.reset();
  }
}
