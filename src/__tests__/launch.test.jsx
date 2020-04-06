import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Launch from '../components/Launch';
import Collapsible from '../components/Collapsible';

describe('<Launch />', () => {
  const launchProps = {
    mission_name: 'Mission Falcon 1',
    details: 'This is detail',
    rocket: {
      rocket_type: 'Falcon RT',
      rocket_name: 'Falcon 9',
      rocket_id: 'falcon9',
    }
  };
  it('renders snapshot', () => {
    const component = renderer.create(<Launch  launch={launchProps}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the inner Collapsible', () => {
    const wrapper = mount(<Launch launch={launchProps} />);
    expect(wrapper.find(Collapsible).length).toEqual(1);
  });

  it('renders inner text elements correctly', () => {
    const wrapper = mount(<Launch launch={launchProps} />);

    const rocketName =  wrapper.find('.col-info').at(0).text();
    expect(rocketName).toEqual(launchProps.rocket.rocket_name);

    const rocketType =  wrapper.find('.col-info').at(1).text();
    expect(rocketType).toEqual(launchProps.rocket.rocket_type);

    const rocketId =  wrapper.find('.col-info').at(2).text();
    expect(rocketId).toEqual(launchProps.rocket.rocket_id);

    const missionName =  wrapper.find('.col-info').at(3).text();
    expect(missionName).toEqual(launchProps.details || 'Not available');

  });
});
