import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IAboutMe, ICertsAndLicenses, IEducation, IExperience } from 'src/app/model/IAboutMe';
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


  public aboutMe?: IAboutMe;

  public faEdit = faPencilAlt;
  public faDelete = faTrash;

  public educationEditForm: FormGroup;
  public experienceEditForm: FormGroup;
  public certsAndLicensesEditForm: FormGroup;
  public aboutMeEditForm: FormGroup;

  public editIndex;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.editIndex = -1;

    this.aboutMeEditForm = fb.group({
      'about-me': ['']
    })

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
      this.aboutMeEditForm.get('about-me')!.setValue(this.aboutMe.about);
    });
  }

  ngOnInit(): void {}


  onSubmit() {}


  onAddNewExperienceBullet(){
    (this.experienceEditForm.get('bullets') as FormArray).push(this.fb.control(['']))
  }

  onDeleteExperienceBullet(index: number){
    (this.experienceEditForm.get('bullets') as FormArray).removeAt(index);
  }


  onExperienceSave(){

    if(this.editIndex <= -1){
      this.experienceEditModal.close();
      return this.aboutMe?.experience.push(this.experienceEditForm!.getRawValue())
    }

    this.aboutMe!.experience[this.editIndex] = this.experienceEditForm!.getRawValue();

    this.editIndex = -1;
    return this.experienceEditModal.close();
  }

  openNewExperienceModal(){
    this.experienceEditModal.open();
  }

  openEditExperienceModal(model: IExperience, idx: number){
    this.editIndex = idx;

    model.start = formatDate(model.start, 'yyyy-MM-dd', 'en')

    if(model.end){
      model.end = formatDate(model.end, 'yyyy-MM-dd', 'en')
    }
 
    this.experienceEditForm.controls.bullets = this.fb.array(model.bullets.map((bullet) => this.fb.control([bullet])), Validators.required)


    this.experienceEditForm.setValue(model);


    this.experienceEditModal.open();
  }

  onEducationSave(){
    if(this.editIndex <= -1){
      this.educationEditModal.close();
      return this.aboutMe?.education.push(this.educationEditForm.value)
    }

    this.aboutMe!.education[this.editIndex] = this.educationEditForm!.value;

    this.editIndex = -1;
    return this.educationEditModal.close();
  }

  saveAboutMe(){

    console.log(this.aboutMeEditForm.value)

    this.aboutMe!.about = this.aboutMeEditForm.value['about-me'];

    this.api.updateAboutMe(this.aboutMe!).subscribe(console.log)
  }

  deleteEducationItem(index: number){
    this.aboutMe!.education.splice(index, 1);
  }

  openNewEducationModal(){
    this.educationEditModal.open();
  }

  onSaveCertsAndLicenses(){
    if(this.editIndex <= -1){
      this.certsAndLicensesEditModal.close();
      return this.aboutMe?.certsAndLicenses.push(this.certsAndLicensesEditForm.getRawValue())
    }

    this.aboutMe!.certsAndLicenses[this.editIndex] = this.certsAndLicensesEditForm!.getRawValue();

    this.editIndex = -1;
    return this.certsAndLicensesEditModal.close();
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

  openNewCertsAndLicenses(){
    this.certsAndLicensesEditModal.open();
  }

  openEditCertsAndLicensesModal(model: ICertsAndLicenses, idx: number){
    this.editIndex = idx;

    model.acquired = formatDate(model.acquired, 'yyyy-MM-dd', 'en')

    if(model.expiration){
      model.expiration = formatDate(model.expiration, 'yyyy-MM-dd', 'en')
    }
 

    this.certsAndLicensesEditForm.setValue(model);


    this.certsAndLicensesEditModal.open();
  }

}
