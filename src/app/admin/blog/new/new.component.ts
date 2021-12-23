import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public newBlogPostForm: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.newBlogPostForm = fb.group({
      title: ['', Validators.required],
      tags: fb.array([], Validators.required),
      description: [''],
      image: [''],
      content: ['', Validators.required]
    })


  }

  ngOnInit(): void {
  }

  public onSubmit(){
    
  }

}
