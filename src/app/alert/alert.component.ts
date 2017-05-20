import { Component, OnInit, Input, Output, EventEmitter, style, state, animate, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AlertComponent implements OnInit {

  @Input() showalert : boolean = false;
  @Output() showalertChanged = new EventEmitter<boolean>();
  @Input() message : string = '';
  @Input() viewType : string = 'alert-success';
  constructor() { }

  ngOnInit() {
  }
  
  hide(){
    this.showalert = false;
    this.showalertChanged.emit(this.showalert);
  }

}
