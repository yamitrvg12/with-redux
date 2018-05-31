import { INCREMENT, DECREMENT } from './actions';
import { tassign } from 'tassign';

export interface IMessagingState {
  newMessages: number;
}

export const MESSAGING_INITIAL_STATE: IMessagingState = {
  newMessages: 0,
};

export function messagingReducer(state: IMessagingState = MESSAGING_INITIAL_STATE, action): IMessagingState {
    switch (action.type) {
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
