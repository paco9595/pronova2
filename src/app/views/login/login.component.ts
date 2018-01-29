import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-view-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class ViewLoginComponent implements OnInit {

  loginForm: FormGroup;
  private destroy$ = new Subject<void>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.loginForm.valueChanges
    //   .map((form: any) => {
    //     return {
    //       email: form.email,
    //       pass : form.password
    //     };
    //   })
    //   .debounceTime(300)
    //   .takeUntil(this.destroy$)
    //   .subscribe((form: any) => {
    //   });
  }

}
