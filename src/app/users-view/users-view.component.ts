import {Component} from '@angular/core';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {UserRemove} from '../user.actions';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})

export class UsersViewComponent {

  users: Observable<User[]>;
  
  constructor(private store: Store<{ users: User[] }>) {
    this.users = store.pipe(select('users'));
  }

  removeUser(userIndex) {
    this.store.dispatch(new UserRemove(userIndex));
  }
}