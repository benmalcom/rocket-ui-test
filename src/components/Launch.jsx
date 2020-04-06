import React from 'react';
import PropTypes from "prop-types";
import Collapsible from "./Collapsible";

const Launch = (props) => {

    const { launch } = props;
    return (
        <li className="launch-item">
            <Collapsible title={launch.mission_name}>
                <table className="launch-info-table">
                    <tbody>

                    <tr>
                        <td>
                            <h4 className="col-header">Rocket Name</h4>
                            <p className="col-info">{launch.rocket.rocket_name}</p>
                        </td>
                        <td>
                            <h4 className="col-header">Rocket Type</h4>
                            <p className="col-info">{launch.rocket.rocket_type}</p>
                        </td>
                        <td>
                            <h4 className="col-header">Rocket ID</h4>
                            <p className="col-info">{launch.rocket.rocket_id}</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <h4 className="col-header">More Details about {launch.mission_name}</h4>
                            <p className="col-info">{launch.details || 'Not available'}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Collapsible>
        </li>
    );
};

Launch.propTypes = {
    launch: PropTypes.shape({
        mission_name: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        rocket: PropTypes.shape({
            rocket_name: PropTypes.string.isRequired,
            rocket_type: PropTypes.string.isRequired,
            rocket_id: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired,
};


export default Launch;
