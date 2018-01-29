import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { ViewLoginComponent } from './login.component';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [
    ViewLoginComponent
  ],
  exports: [
    ViewLoginComponent
  ],
  providers: []
})
export class LoginModule {   }
