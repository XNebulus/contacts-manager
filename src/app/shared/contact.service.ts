import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {

  private contactsUrl = '/api/contacts';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  get(): Promise<Contact[]> {
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(response => response.json().data as Contact[])
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getContact(id: number): Promise<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Contact)
      .catch(this.handleError);
  }

  update(contact: Contact): Promise<Contact> {
    const url = `${this.contactsUrl}/${contact.id}`;
    return this.http
      .put(url, JSON.stringify(contact), { headers: this.headers })
      .toPromise()
      .then(() => contact)
      .catch(this.handleError);
  }

  add(contact: Contact): Promise<Contact> {
     return this.http    
      .post(this.contactsUrl, JSON.stringify(contact), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Contact)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
