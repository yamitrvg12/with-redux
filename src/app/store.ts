import { REMOVE_ITEM, ADD_ITEM } from "./actions";

export interface IAppState {
    todoList: Array<any>
}

export const INITIAL_STATE:IAppState = {
    todoList: []
}

export function rootReducer(state:IAppState, action):IAppState {
    switch(action.type) {
        case ADD_ITEM:
            return { 
                todoList: state.todoList.concat({ title: action.title,
                id: state.todoList.length + 1
            })}
        case REMOVE_ITEM:
            const target = state.todoList.filter(item => item.id !== action.id);
            return null;
    }

    return state;
}