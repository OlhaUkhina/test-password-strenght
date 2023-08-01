import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-password-strenght';
  passwordForm: FormGroup;
  strenght = 0;
  constructor() {
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
    this.passwordForm.get("password")?.valueChanges.subscribe(x => {
      this.strenght = 0;
      if (this.isSomeSpecialCase()) this.strenght++

      if (this.isSomeLetters()) this.strenght++

      if (this.isSomeNumbers()) this.strenght++

    })
  }

  isSomeSpecialCase() {
    return /[^A-Za-z0-9]/.test(this.passwordForm.value.password)
  }
  isSomeLetters() {
    return /[A-Za-z]/.test(this.passwordForm.value.password)
  }
  isSomeNumbers() {
    return /[0-9]/.test(this.passwordForm.value.password)
  }
}
