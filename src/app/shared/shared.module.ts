import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';




@NgModule({
  declarations: [
    CardComponent,
    BlogEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent
  ]
})
export class SharedModule { }
