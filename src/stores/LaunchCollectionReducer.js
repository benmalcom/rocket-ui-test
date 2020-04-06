import { ACTIONS } from '../actions/Launches';

const initialState = {
  launches: [],
  fetching: false,
  offset: 0,
  limit: 20,
  hasMore: true,
};

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches],
    offset: state.offset + action.payload.launches.length,
    hasMore: !!action.payload.launches && action.payload.launches.length > 0
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
