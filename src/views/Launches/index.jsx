import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {withConnectedView} from '../ConnectedView';
import {fetchLaunchesIfNeeded, resetLaunchesState} from "../../actions/Launches";
import Launch from '../../components/Launch';
import './Launches.sass';


const LaunchesView = (props) => {
    const {launchCollection, dispatch} = props;
    const { launches, hasMore, fetching } = launchCollection;
    const fetchLaunches = () => fetchLaunchesIfNeeded({dispatch, launchCollection});
    useEffect(() => {
        fetchLaunches();
        return () => dispatch(resetLaunchesState());
    }, []);

    const getContent = () => {
        if (!launches.length && !fetching) {
            return <div> No data available </div>;
        }
        const launchesMarkup = launches.map((launch, index) => <Launch key={launch.launch_id || index} launch={launch}/>);
        return <ul className="launch-list">{launchesMarkup}</ul>;
    };

    return (
        <div className="launches" id="launches">
            <h2> SpaceX launches</h2>
            {getContent()}
            {fetching && <div className="loading"> Loading... </div>}
            {hasMore && !fetching && <div className="load-more">
                <button type="button" onClick={fetchLaunches}>Load More</button>
            </div>}
        </div>
    );
};

LaunchesView.propTypes = {
    launchCollection: PropTypes.shape({
        launches: PropTypes.array.isRequired,
        hasMore: PropTypes.bool,
        fetching: PropTypes.bool,
    }),
    dispatch: PropTypes.func.isRequired,
};

LaunchesView.defaultProps = {
    launchCollection: {
        launches: [],
        hasMore: false,
        fetching: true,
    },
};

export default withConnectedView(LaunchesView);
