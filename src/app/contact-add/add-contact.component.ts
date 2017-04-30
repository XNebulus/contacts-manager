import { Component, OnInit, style, state, animate, transition, trigger } from '@angular/core';
import { Router } from '@angular/router'
import { Contact } from '../shared/contact'
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
  animations: [
  trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity:0}),
      animate(500, style({opacity:1})) 
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(500, style({opacity:0})) 
    ])
  ])
]
})
export class AddContactComponent implements OnInit {
  contact: Contact = new Contact();
  isSending: boolean = false;
  constructor(private router: Router, private contactServise: ContactService) { }

  ngOnInit() {
  }

  add() {
    this.isSending = true;
    this.contact.id = new Date().getTime();
    
    this.contactServise.add(this.contact).then((data) => {
      this.router.navigate(['/contacts']);
    });
  }

}
