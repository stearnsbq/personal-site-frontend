import { Component, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public shown: boolean;

  faExit = faWindowClose

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
