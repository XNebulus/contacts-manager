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
import { SearchPipe } from './shared/pipes/search.pipe';
import { ParagraphPipe } from './shared/pipes/paragraph.pipe';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { SearchComponent } from './search/search.component';
import { LoggedInGuard } from './shared/login.guard';
import {AuthService} from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    AddContactComponent,
    ViewContactComponent,
    EditorComponent,
    ModalComponent,
    SearchPipe,
    ParagraphPipe,
    SearchComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ContactService, SearchService, AuthService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
