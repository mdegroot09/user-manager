import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './user.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { NewComponent } from './new/new.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent,
    NewComponent,
    UsersViewComponent,
    UserAddComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot({ users: UserReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
