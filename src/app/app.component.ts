import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myForm: FormGroup = this.fb.group({
    'text': ['', [Validators.required]],
    'number': [null, [Validators.required]],
    'select': ['', [Validators.required]],
    'coment': [''],
  });

  constructor(private fb: FormBuilder) {}

  name = 'Angular ' + VERSION.major;

  onSubmit() {
    console.log(this.myForm.value);
  }
}
