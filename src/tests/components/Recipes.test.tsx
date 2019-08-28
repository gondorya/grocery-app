import React from 'react';
import { shallow } from 'enzyme';
import { Recipes } from '../../components/Recipes';
import recipes from '../fixtures/recipes';

test('should render list of recipes', () => {
	const wrapper = shallow(<Recipes recipes={recipes} />);
	expect(wrapper).toMatchSnapshot();
});
