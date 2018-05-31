import { REMOVE_ITEM, ADD_ITEM, DELETE_ALL } from './actions';
import { tassign } from 'tassign';

export interface ITaskingState {
  todoList: Array<any>;
  updateDate: number;
}

export const TASKING_INITIAL_STATE: ITaskingState = {
    todoList: [],
    updateDate: null,
};

export function taskingReducer(state: ITaskingState = TASKING_INITIAL_STATE, action): ITaskingState {
    switch (action.type) {
        case ADD_ITEM:
          const updateTodoItem = {
            title: action.title,
            id: state.todoList.length + 1,
          };

          return tassign(state, {
            todoList: state.todoList.concat(updateTodoItem),
            updateDate: Date.now(),
          });
        case REMOVE_ITEM:
          const removeItem = state.todoList.filter(item => item.id !== action.id);

          return tassign(state, {
            todoList: removeItem,
            updateDate: Date.now(),
          });
        case DELETE_ALL:
          return tassign(state, {
            todoList: [],
            updateDate: Date.now(),
          });
    }

    return state;
}
