import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent {

  users: Observable<User[]>;
  userIndex
  user = {}
  
  constructor(private store: Store<{ users: User[] }>, private router: Router) {
    // grab redux index of user off params -- has to be easier way
    this.userIndex = +router.getCurrentNavigation().finalUrl.root.children.primary.segments[1].path
    // pull unique user directly off store -- better way?
    this.user = store.source['_value'].users[this.userIndex]
    console.log('this.user:', this.user)
  }

  show = (firstName, lastName, email) => {
    event.preventDefault()
    console.log(firstName, lastName, email)
  }
}
