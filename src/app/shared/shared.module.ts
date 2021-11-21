import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { EditorComponent } from './editor/editor.component';



@NgModule({
  declarations: [
    CardComponent,
    EditorComponent,
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
  ],
  exports:[
    CardComponent,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    EditorComponent
  ]
})
export class SharedModule { }
