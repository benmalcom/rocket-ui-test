import LaunchService from '../services/LaunchService';

export const ACTIONS = {
  REQUEST_LAUNCHES: 'REQUEST_LAUNCHES',
  RECEIVE_LAUNCHES: 'RECEIVE_LAUNCHES',
  RESET_LAUNCHES: 'RESET_LAUNCHES'
};

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

export const resetLaunchesState = () => ({
  type: ACTIONS.RESET_LAUNCHES
});

export const fetchLaunches = (dispatch, launchCollection) => {
  dispatch(requestLaunches());
  return LaunchService.get({ limit: launchCollection.limit }).then(response => dispatch(receiveLaunches(response)));
};

const shouldFetchLaunches = launchCollection => !launchCollection || !launchCollection.fetching;

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
    shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch, launchCollection);
