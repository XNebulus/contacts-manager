import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';


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
