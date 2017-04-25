import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { SearchService } from './shared/search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contacts manager';
  constructor(private router: Router, private searchService: SearchService) {}

  searchTerm(term: string) {
    if (this.router.url !== '/contacts') {
      this.searchService.saveTerm(term);
      this.router.navigate(['/contacts']);
    }
    else {
      this.searchService.announceTerm(term);
    }
  }
}
