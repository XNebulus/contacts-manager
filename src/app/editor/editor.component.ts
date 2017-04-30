import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  
  @Input() param:string;
  @Output() paramChange = new EventEmitter<string>();
  @Input() title: string;
  @Input() field: string;
  @Input() isRequired : boolean = false;
  @Input() isEmail : boolean = false;
  show: boolean;
  value: string;
  
  constructor() {
    this.show = false;
    this.field = 'text';
   }

  ngOnInit() {
  }

  showEditor(){
    this.show = true;
    this.value = this.param;
  }

  cancel(){
    this.show = false;
  }

  save(){
    this.show = false;
    this.paramChange.emit(this.value);
  }

}
