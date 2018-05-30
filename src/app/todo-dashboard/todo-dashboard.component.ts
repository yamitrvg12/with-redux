import { Component } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { DELETE_ALL } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select() todoList;
  @select() updateDate;
  // Read the comment in TodoService
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  deleteAll() {
    const getState = this.ngRedux.getState();

    if (getState.todoList.length > 0) {
      this.ngRedux.dispatch({ type: DELETE_ALL });
    }
  }
}
