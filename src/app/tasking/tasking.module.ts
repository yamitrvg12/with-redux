import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import Components
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

@NgModule({
  // Components
  declarations: [
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // When create sub molules and expose to the parent module
    TodoListComponent,
    TodoDashboardComponent
  ]
})
export class TaskingModule { }
