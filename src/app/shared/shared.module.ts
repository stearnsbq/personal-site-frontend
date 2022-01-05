import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { ModalComponent } from './modal/modal.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import ImageResize from 'quill-image-resize-module';
import Quill from 'quill';
import { NumToMonthPipe } from './pipes/num-to-month.pipe';


@NgModule({
  declarations: [
    CardComponent,
    ModalComponent,
    LoadingSpinnerComponent,
    NumToMonthPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CardComponent,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    ModalComponent,
    QuillModule,
    NumToMonthPipe,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
