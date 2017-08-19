import { Component } from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl : './app/app.simpleform.html'
})
export class SimpleFormComponent {
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }
}
