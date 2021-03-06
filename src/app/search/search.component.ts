import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor() { }

  onKeyup (term: string){
    this.search.emit(term);
  }

  ngOnInit() {
  }

}
