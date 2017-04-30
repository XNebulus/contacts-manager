import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListContactsComponent } from './contact-list/list-contacts.component';
import { AddContactComponent } from './contact-add/add-contact.component';
import { ViewContactComponent } from './contact-view/view-contact.component';


const routes: Routes = [
  { path: 'contacts', component: ListContactsComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'view/:id', component: ViewContactComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
