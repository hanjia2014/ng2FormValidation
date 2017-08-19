import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'form-validation',
    templateUrl: './app/app.formvalidation.html'
})
export class FormValidationComponent {
    complexForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.complexForm = fb.group({
            'firstName': [null, Validators.required],
            'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
            'gender': [null, Validators.required],
            'phoneNo': ['+64 21 142 7176', Validators.required],
            'hiking': [false],
            'running': [false],
            'swimming': [false]
        })
        console.log(this.complexForm);
        this.complexForm.valueChanges.subscribe((form: any) => {
            console.log('form changed to:', form);
        }
        );
    }

    submitForm(value: any) {
        console.log(value);
    }
}
