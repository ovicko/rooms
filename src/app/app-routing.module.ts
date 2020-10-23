import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [
  {path: 'rooms', component: RoomListComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: RoomListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
