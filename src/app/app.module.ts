import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { ListContactsComponent } from './contact-list/list-contacts.component';
import { AddContactComponent } from './contact-add/add-contact.component';
import { ViewContactComponent } from './contact-view/view-contact.component';
import { EditorComponent } from './editor/editor.component';
import { ModalComponent } from './modal/modal.component';

import { ContactService } from './shared/contact.service';
import { SearchService } from './shared/search.service'
import { SearchPipe } from './shared/search.pipe';
import { ParagraphPipe } from './shared/paragraph.pipe';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    AddContactComponent,
    ViewContactComponent,
    EditorComponent,
    ModalComponent,
    SearchPipe,
    ParagraphPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ContactService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
