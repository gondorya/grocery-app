import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../../components/Navigation';

test('should render navigation', () => {
	const wrapper = shallow(<Navigation />);
	expect(wrapper).toMatchSnapshot();
});
