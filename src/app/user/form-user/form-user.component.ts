import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  userForm: any;
  route: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private r: Router) { this.route = r}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      firstName: "",
      lastName: "",
      drinkPreference:"",
      hobbies: this.formBuilder.array([]),
    });

  }

  onSubmit() {
    const formValue = this.userForm.value;
    const newUser = new User(formValue['firstName'], formValue['lastName'], formValue['email'], formValue['drinkPreference'], formValue['hobbies'] ? formValue['hobbies']: [])
    this.userService.addUser(newUser)
    this.route.navigate(['user'])
  }


  getHobbies(): FormArray{
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobby = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobby);
  }

  getErrorMessage() {
    if (this.userForm.get('email').hasError('required')) {
      return "Merci d'indiquer votre adresse mail !";
    }

    return this.userForm.get('email').hasError('email') ? "Votre adresse mail n'est pas valide" : '';
  }

}
