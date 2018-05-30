import { Component } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent { 
  @select() todoList;
  // Read the comment in TodoService
  constructor(private ngRedux: NgRedux<IAppState>) { 
  }
}
