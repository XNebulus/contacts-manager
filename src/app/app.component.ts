import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { SearchService } from './shared/search.service'
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contacts manager';
  userIsLoggedIn: boolean;

  constructor(private router: Router, private searchService: SearchService, private auth: AuthService) {
    auth.userIsloggedIn.subscribe(userIsloggedIn => {
      this.userIsLoggedIn = userIsloggedIn;
    });
  }

  logout($event): void {
    $event.preventDefault();

    this.auth.logout().then(success => {
      if (success) {
        this.router.navigateByUrl('/');
      }
    });
  }


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
