import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})



export class AuthComponent implements OnInit {
  isLoginMode: boolean = false;
  authForm: FormGroup = new FormGroup({});
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(frag => {
      if(frag === 'login') {
        this.isLoginMode = true;
      } else {
        this.isLoginMode = false;
      }
    });
    // this.authService.user.pipe(take(1), tap(user=> {
    //   console.log('hi');
    // })).subscribe();
    this.authService.isLoading.next(false);
    this.authForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'signUpGroup' : new FormGroup({
        'passwordConfrim': new FormControl(null, [Validators.required, this.confirmPassword.bind(this)]),
        'displayName': new FormControl(null, [Validators.required]),
      })
    });
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    if (this.isLoginMode) {
      this.authForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required])
      });
    } else {
      this.authForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required]),
        'signUpGroup' : new FormGroup({
          'passwordConfrim': new FormControl(null, [Validators.required, this.confirmPassword.bind(this)]),
          'displayName': new FormControl(null, [Validators.required]),
        })
      });
    }
  }
  onSubmit() {
    if(this.isLoginMode){
      this.authService.login(this.authForm.value.email, this.authForm.value.password);
    }
  }
  confirmPassword(control: FormControl): {[s: string]: boolean} | null {
    if (control.value !== this.authForm.value.password) {
      return {'Password confirm mismatch': false}
    }
    return null;
  }
  validDate(control: FormControl): {[s: string]: boolean} | null {
    if(new Date(control.value) > new Date()) {
      return {'your birthdate cannot be from the future unless you are a time traveler': false};
    }
    return null
  }
}
