import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: UserAddComponent},
  {path: 'update/:id', component: UserUpdateComponent},
  // reroute incorrect paths to Home
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
