import { REMOVE_ITEM, ADD_ITEM, DELETE_ALL, INCREMENT, DECREMENT } from './actions';
import { tassign } from 'tassign';
import { debug } from 'util';
import { stat } from 'fs';

export interface IAppState {
  todoList: Array<any>;
  updateDate: number;
  newMessages: number;
}

export const INITIAL_STATE: IAppState = {
    todoList: [],
    updateDate: null,
    newMessages: 0,
};

export function rootReducer(state: IAppState, action): IAppState {
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
        case INCREMENT:
          return tassign(state, {
            newMessages: state.newMessages + 1,
          });
        case DECREMENT:
          return tassign(state, {
            newMessages: state.newMessages - 1,
          });
    }

    return state;
}
