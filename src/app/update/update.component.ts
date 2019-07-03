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
  user = {
    firstName: '',
    lastName: '',
    email: ''
  }
  
  constructor(private store: Store<{ users: User[] }>, private router: Router) {
    // grab ngrx index of user off params -- has to be easier way
    this.userIndex = +router.getCurrentNavigation().finalUrl.root.children.primary.segments[1].path
    // pull unique user directly off store -- better way?
    this.user = store.source['_value'].users[this.userIndex]
    try{
      // if no user is found, reroute to home
      this.user.firstName && this.user.lastName && this.user.email
    }
    catch {
      this.router.navigate(['/'])
    }
  }

  show = (firstName, lastName, email) => {
    event.preventDefault()
    console.log(firstName, lastName, email, this.userIndex)
  }
}
