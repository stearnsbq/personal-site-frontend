import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    CardComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
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
  ]
})
export class SharedModule { }
