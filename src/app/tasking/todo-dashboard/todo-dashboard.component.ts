import { Component } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { DELETE_ALL } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select(s => s.tasking.todoList) todoList;
  @select(s => s.tasking.updateDate) updateDate;
  // Read the comment in TodoService
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  deleteAll() {
    const getState = this.ngRedux.getState();

    if (getState.tasking.todoList.length > 0) {
      this.ngRedux.dispatch({ type: DELETE_ALL });
    }
  }
}
