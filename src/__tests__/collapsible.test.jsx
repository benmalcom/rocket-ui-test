import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Collapsible from '../components/Collapsible';

describe('<Collapsible />', () => {
    const props = {
        title: 'Mission Falcon 1',
        children: 'This is children',
    };
    it('renders snapshot', () => {
        const component = renderer.create(<Collapsible  {...props}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the title and content correctly', () => {
        const wrapper = mount(<Collapsible {...props} />);
        const buttonText =  wrapper.find('button.accordion').text();

        expect(buttonText).toEqual(props.title);

        const panelContent =  wrapper.find('.panel .content').text();
        expect(panelContent).toEqual(props.children);

    });
});
