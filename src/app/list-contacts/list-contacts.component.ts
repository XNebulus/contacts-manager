import { Component, OnInit, style, state, animate, transition, trigger } from '@angular/core';
import { Contact } from '../shared/contact';
import { ContactService } from '../shared/contact.service';
import { SearchService } from '../shared/search.service'

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
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
export class ListContactsComponent implements OnInit {

  contacts: Contact[] = [];
  term: string;
  loading: boolean = true;

  constructor(private contactServise: ContactService, private searchService: SearchService) { }

  ngOnInit() {
    this.contactServise.get().then((data) => {
      this.contacts = data;
      this.loading = false;
    });
    this.searchService.termAnnounced$.subscribe(
      term => {
        this.term = term;
      });
    this.searchService.announceSavedTerm();
  }

  delete(contact: Contact) {
    this.contactServise.delete(contact);
  }

}
