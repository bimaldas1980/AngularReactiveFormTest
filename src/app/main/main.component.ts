import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mainForm: FormGroup;

  @ViewChild('ChildComponent') childComponent;

  get firstname() {
    return this.mainForm.get('firstname');
  }

  get surname() {
    return this.mainForm.get('surname');
  }

  get address() {
    return this.mainForm.get('address');
  }

  get phone() {
    return this.mainForm.get('phone');
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
   this.createForm();
  }

  validateFirstName: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const lengthOfFirstName = +this.childComponent.getItem();
    const value = control.get('firstname').value ? control.get('firstname').value.toString() : '';
    if (value.length === lengthOfFirstName) {
      return null;
    }

    return {
      firstNameInvalid: {
        value: value,
        message: 'Invalid length of first name.'
      }
    };
 }

  validFirstName(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const lengthOfFirstName = +this.childComponent.getItem();
      const value = control.value ? control.value.toString() : '';
      console.log(lengthOfFirstName);
      console.log(value);
      if (value.length === lengthOfFirstName) {
        return null;
      }

      return {
        firstNameInvalid: {
          value: value,
          message: 'Invalid length of first name.'
        }
      };

    };
  }

  createForm() {
    this.mainForm = this.formBuilder.group(
      {
        firstname: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        address: [''],
        phone: ['']
      }
    );
  }

  submitForm() {
    console.log(this.firstname);
    console.log(this.surname);
  }
}
