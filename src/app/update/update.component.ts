import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent {

  users: Observable<User[]>;
  userIndex
  user = {}
  // user = {firstName: 'mike', lastName: 'de groot', email: 'mike@email.com'}
  
  constructor(private store: Store<{ users: User[] }>, private router: Router) {
    // this.users = store.pipe(select('users'));

    // grab redux index of user off params -- has to be easier way
    this.userIndex = +router.getCurrentNavigation().finalUrl.root.children.primary.segments[1].path
    // pull unique user directly off of store
    this.user = store.source['_value'].users[this.userIndex]
    console.log('this.user:', this.user)
  }
}
