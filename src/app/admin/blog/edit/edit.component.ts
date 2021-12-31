import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlogPost } from 'src/app/model/IBlogPost';
import { IResponse } from 'src/app/model/IResponse';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  environment = environment;
  public blogPostEditForm: FormGroup;

  public postID?: string;
  public post?: IBlogPost;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private api: ApiService, private router: Router, private route: ActivatedRoute) { 

    this.blogPostEditForm = fb.group({
      title: ['', Validators.required],
      tags: fb.array([], Validators.required),
      description: [''],
      image: [null, ],
      content: ['', Validators.required]
    })


  }

  ngOnInit(): void {

    this.route.params.subscribe((result) => {
     
      if('post' in result){

        this.api.getBlogPostByID(result.post).subscribe(({data}: IResponse<IBlogPost>) => {

          this.post = data;

          this.postID = result.post;

          this.blogPostEditForm.setValue({title: data.title, description: data.description, image: data.image, content: data.content, tags: data.tags});

        }, err => {
          this.router.navigate(['/admin/blog/edit/new'])
        })

      }

    })

  }

  onFileChange(event: any) {

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      this.blogPostEditForm.patchValue({
        image: file
     });
  
    }
  }

  public onSubmit(){

    console.log(this.blogPostEditForm.valid)

    //if(this.blogPostEditForm.valid){

    if(this.post){

      return this.api.updateBlogPost(this.postID!, this.blogPostEditForm.getRawValue()).then(({data}) => {
        this.router.navigate(['/admin/blog/edit', data._id])
      })
    }


      return this.api.createBlogPost(this.blogPostEditForm.getRawValue()).then(({data}) => {
        this.router.navigate(['/admin/blog/edit', data._id])
      })

  //  }

    
    

  }

}
