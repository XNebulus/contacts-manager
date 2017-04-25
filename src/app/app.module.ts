import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditorComponent } from './editor/editor.component';
import { ModalComponent } from './modal/modal.component';

import {ContactService} from './shared/contact.service';
import {SearchService} from './shared/search.service'
import { SearchPipe } from './shared/search.pipe';
import { ParagraphPipe } from './shared/paragraph.pipe';

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
    AppRoutingModule
  ],
  providers: [ContactService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }