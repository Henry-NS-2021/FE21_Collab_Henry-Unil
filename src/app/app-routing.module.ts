import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
     path: "navbar",component: NavbarComponent
    },
 {
   path: "content",component: ContentComponent
 },
 {
  path: "contact",component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
