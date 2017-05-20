import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListContactsComponent } from './contact-list/list-contacts.component';
import { AddContactComponent } from './contact-add/add-contact.component';
import { ViewContactComponent } from './contact-view/view-contact.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/login.guard';


const routes: Routes = [
  { path: 'contacts', component: ListContactsComponent },
  { path: 'contacts/add', component: AddContactComponent, canActivate: [LoggedInGuard] },
  { path: 'contacts/view/:id', component: ViewContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
