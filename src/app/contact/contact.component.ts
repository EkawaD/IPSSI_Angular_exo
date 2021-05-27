import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  contactForm: any;
  srcResult!: File;
  email!: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      situation: "",
      file: ""
    });

  }

  onSubmit() {
    const formValue = this.contactForm.value;
    console.log(formValue)

  }

  getErrorMessage() {
    if (this.contactForm.get('email').hasError('required')) {
      return "Merci d'indiquer votre adresse mail !";
    }

    return this.contactForm.get('email').hasError('email') ? "Votre adresse mail n'est pas valide" : '';
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
        this.srcResult = inputNode.files[0].name
        console.log(this.srcResult)
      };

      reader.readAsArrayBuffer(inputNode.files[0]);

    }
  }

}
