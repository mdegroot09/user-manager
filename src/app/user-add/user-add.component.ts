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
  
  AddUser(userName: string) { 
    const user = new User(); 
    user.name = userName; 
    this.store.dispatch(new UserAdd(user)); 
  } 
}