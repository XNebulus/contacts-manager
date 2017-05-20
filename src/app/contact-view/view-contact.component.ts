import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contact } from '../shared/contact';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  public showAlert: boolean = false;
  public contact: Contact = new Contact();
  private id: number;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.contactService.getContact(this.id).then(contact => this.contact = contact);
    });
  }

  onSaved(evt: string): void {
    this.contactService
      .update(this.contact)
      .then(() => this.showAlert = true);
  }

}
