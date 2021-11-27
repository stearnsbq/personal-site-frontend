import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public shown: boolean;

  constructor() { 
    this.shown = false;
  }

  ngOnInit(): void {
  }

  open(){
    this.shown = true;
  }

  close(){
    this.shown = false;
  }

}
