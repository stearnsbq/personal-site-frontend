import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IAboutMe, IEducation } from 'src/app/model/IAboutMe';
import { ApiService } from 'src/app/services/api.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {

  @ViewChild("educationEditModal") educationEditModal!: ModalComponent;
  @ViewChild("experienceEditModal") experienceEditModal!: ModalComponent;
  @ViewChild("certsAndLicensesEditModal") certsAndLicensesEditModal!: ModalComponent;

  public aboutMeEditForm?: FormGroup;
  public aboutMe?: IAboutMe;

  public faEdit = faPencilAlt;
  public faDelete = faTrash;

  public educationEditForm: FormGroup;
  public experienceEditForm: FormGroup;
  public certsAndLicensesEditForm: FormGroup;


  public editIndex;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.editIndex = -1;


    this.educationEditForm = fb.group({
      degree: ['', Validators.required],
      school: ['', Validators.required],
      start: ['', Validators.required],
      end: []
    })

    this.experienceEditForm = fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      start: [new Date(), Validators.required],
      end: [],
      bullets: fb.array([], Validators.required)
    })

    this.certsAndLicensesEditForm = fb.group({
      title: ['', Validators.required],
      credential: ['', Validators.required],
      description: ['', Validators.required],
      acquired: ['', Validators.required],
      expiration: []
    })


    this.api.getAboutMe().subscribe(({ data }) => {
      this.aboutMe = data;
    });
  }

  ngOnInit(): void {}


  onSubmit() {}


  onEducationSave(){
    if(this.editIndex <= -1){
      this.educationEditModal.close();
      return this.aboutMe?.education.push(this.educationEditForm.value)
    }

    this.aboutMe!.education[this.editIndex] = this.educationEditForm!.value;

    this.editIndex = -1;
    return this.educationEditModal.close();
  }


  deleteEducationItem(index: number){


    this.aboutMe!.education.splice(index, 1);

  }

  openNewEducationModal(){
    this.educationEditModal.open();
  }

  openEditEducationModal(model: IEducation, idx: number){
    this.editIndex = idx;


    model.start = formatDate(model.start, 'yyyy-MM-dd', 'en')

    if(model.end){
      model.end = formatDate(model.end, 'yyyy-MM-dd', 'en')
    }
  

    this.educationEditForm.setValue(model);


    this.educationEditModal.open();
  }

}
