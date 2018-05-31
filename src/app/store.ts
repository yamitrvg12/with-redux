import { tassign } from 'tassign';
import { combineReducers } from 'redux';
import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';
import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from './messasing/store';

export interface IAppState {
  tasking: ITaskingState;
  messages: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE,
  messages: MESSAGING_INITIAL_STATE,
};

export const rootReducer = combineReducers({
  tasking: taskingReducer,
  messages: messagingReducer,
});
