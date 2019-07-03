import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {UserUpdate} from '../user.actions'

@Component({
  selector: 'app-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})

export class UserUpdateComponent {

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
    this.users = store.source['_value'].users
    this.user = this.users[this.userIndex]
    try{
      // if no user is found, reroute to home
      this.user.firstName && this.user.lastName && this.user.email
    }
    catch {
      this.router.navigate(['/'])
    }
  }

  updateUser = (firstName, lastName, email) => {
    event.preventDefault()
    const user = new User(); 
    user.firstName = firstName; 
    user.lastName = lastName;
    user.email = email;
    this.users[this.userIndex] = user
    console.log('this.users:', this.users)
    this.store.dispatch(new UserUpdate(this.users))
  }
}
