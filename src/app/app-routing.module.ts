import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [
  {path: 'rooms', component: RoomListComponent},

  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: RoomListComponent},
  {path: 'rooms/:id', component: RoomDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
