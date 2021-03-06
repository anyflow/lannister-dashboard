import * as Immutable from 'immutable';
import * as actions from '../actions';
import initialState from '../initialState';

export default function WebsocketTester(state = initialState.WebsocketTester, action) {
  switch (action.type) {
    case actions.SET_CONNECTION_PROFILE:
      let newState = {};
      newState[action.profile.parameter] = action.profile.value;
      return Object.assign({}, state, {
        connectionProfile: Immutable.Map(state.connectionProfile).merge(newState).toJS()
      });

    case actions.SET_CONNECTION_STATUS:
      return Object.assign({}, state, {
        connectionStatus: action.status
      });

    case actions.ADD_SUBSCRIPTION:
      return Object.assign({}, state, {
        subscriptions: Immutable.Map(state.subscriptions).merge(action.subscription).toJS()
      });

    case actions.REMOVE_SUBSCRIPTION:
      return Object.assign({}, state, {
        subscriptions: Immutable.Map(state.subscriptions).delete(action.topicFilter).toJS()
      });

    case actions.UPDATE_MESSAGE_COUNT:
      return Object.assign({}, state, {
        subscriptions: Immutable.fromJS(state.subscriptions).updateIn([action.topicFilter, 'count'], val => action.count).toJS()
      });

    case actions.ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: Immutable.List(state.messages).push(action.message).toJS()
      });

    case actions.REMOVE_ALL_MESSAGES:
      return Object.assign({}, state, {
        messages: []
      });

    default:
      return state;
  }
}