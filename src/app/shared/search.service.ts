import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {

  private termSource = new Subject<string>();
  termAnnounced$ = this.termSource.asObservable();
  saved: string = '';

  constructor() { }

  announceTerm(term: string) {
    this.termSource.next(term);
  }

  announceSavedTerm() {
    this.termSource.next(this.saved);
    this.saved='';
  }

  saveTerm(term: string) {
    this.saved = term;
  }
}
