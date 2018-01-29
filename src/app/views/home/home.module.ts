import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    NgbCarouselModule,
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }
