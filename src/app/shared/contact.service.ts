import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];
  private isNewData = true;

  constructor() {
    this.contacts = [{
      id: 1, name: 'Karan Bromwich', phone: '01234 56734', address: '123, Some Street\nLeicester\nLE1 2AB',
      email: 'karan@example.com', website: 'stephenradford.me', notes: ''
    },
    {
      id: 2, name: 'Declan Proud', phone: '01234 567890', address: '234, Some Street\nLeicester\nLE1 2AB',
      email: 'declan@example.com', website: 'declanproud.me', notes: 'Some notes about the contact.'
    }];
  }

  get(): Promise<Contact[]> {
    let delay = 0;
    if (this.isNewData) {
      this.isNewData = !this.isNewData;
      delay = 2000;
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.contacts);
      }, delay)
    });
  }

  find(id: number): Contact {
    return this.contacts.find(contact => contact.id == id);
  }

  add (contact: Contact) : Promise<Contact> {
     return new Promise((resolve) => {
      setTimeout(() => {
        this.contacts.push(contact);
        resolve(contact);
      }, 2000)
    });
  }

  delete(contact: Contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

}
