import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import { ADD_ITEM, REMOVE_ITEM } from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @select(s => s.tasking.todoList) todoList;
  // Read the comment in TodoService
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  addItem(input: HTMLInputElement) {
    if (!input.value) {
      return;
    };

    this.ngRedux.dispatch({ type: ADD_ITEM, title: input.value });
    input.value = '';
  }

  removeItem(item) {
    this.ngRedux.dispatch({ type: REMOVE_ITEM, id: item.id });
  }

}
