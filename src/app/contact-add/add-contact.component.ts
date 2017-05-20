import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'
import { Contact } from '../shared/contact'
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
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
