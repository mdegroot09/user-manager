import {Component} from '@angular/core'; 
import {select, Store} from '@ngrx/store'; 
import {User} from '../models/user'; 
import {Observable} from 'rxjs'; 
import {UserAdd} from '../user.actions'; 

@Component({ 
  selector: 'app-user-add', 
  templateUrl: './user-add.component.html', 
  styleUrls: ['./user-add.component.scss'] 
}) 

export class UserAddComponent { 
  users: Observable<User[]>; 
  constructor(private store: Store<{ users: User[] }>) { 
    this.users = store.pipe(select('users')); 
  } 
  
  AddUser(firstName: string, lastName: string, email: string) { 
    event.preventDefault()
    const user = new User(); 
    user.firstName = firstName; 
    user.lastName = lastName;
    user.email = email;
    this.store.dispatch(new UserAdd(user)); 
    let inputsToClear = document.getElementsByClassName('addInput')
    inputsToClear[0]['value'] = ''
    inputsToClear[1]['value'] = ''
    inputsToClear[2]['value'] = ''
  } 
}