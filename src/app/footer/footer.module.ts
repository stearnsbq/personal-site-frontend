import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  exports: [FooterComponent]
})
export class FooterModule {


 }
