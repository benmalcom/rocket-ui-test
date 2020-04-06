import React, {useEffect} from 'react';
import {withConnectedView} from '../ConnectedView';
import {fetchLaunchesIfNeeded} from "../../actions/Launches";
import Launch from '../../components/Launch';
import './Launches.sass';


const LaunchesView = (props) => {
    const {launchCollection, dispatch} = props;
    const { launches, fetching } = launchCollection;
    const fetchLaunches = () => fetchLaunchesIfNeeded({dispatch, launchCollection});
    useEffect(() => {
        fetchLaunches();
    }, []);

    const getContent = () => {
        if (!launches.length && !fetching) {
            return <div> No data available </div>;
        }

        const launchesMarkup = launches.map((launch, index) => <Launch key={launch.launch_id || index}
                                                                                  launch={launch}/>);
        return <ul className="launch-list">{launchesMarkup}</ul>;
    };

    return (
        <div className="launches" id="launches">
            <h2> SpaceX launches</h2>
            {getContent()}
            {fetching && <div className="loading"> Loading... </div>}
        </div>
    );
};

export default withConnectedView(LaunchesView);
