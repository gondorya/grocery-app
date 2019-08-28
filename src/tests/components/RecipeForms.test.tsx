import React from 'react';
import { shallow } from 'enzyme';
import RecipeForm from '../../components/RecipeForm';
import recipes from '../fixtures/recipes';

test('Recipe form without data is rendering', () => {
	const wrapper = shallow(<RecipeForm />);
	expect(wrapper).toMatchSnapshot();
});

test('Recipe form with data is rendering', () => {
	const wrapper = shallow(<RecipeForm recipe={recipes[0]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
	const wrapper = shallow(<RecipeForm />);
	expect(wrapper.state('error')).toBe(false);
	wrapper.find('form').simulate('submit', { preventDefault: () => {} });
	expect(wrapper.state('error').length).toBeGreaterThan(0);
});

test('should set descritpion change', () => {
	const value = 'i change title';
	const wrapper = shallow(<RecipeForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('title')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<RecipeForm newRecipe={onSubmitSpy} recipe={recipes[0]} />);
	wrapper.find('form').simulate('submit', { preventDefault: () => {} });
	expect(wrapper.state('error')).toBe(false);
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		title: 'fish and chips',
		description: 'english street food',
		date: '2018-09-15T00:00:00+02:00',
		ingredients: [ 'fish', 'chips', 'peas' ],
		img: '',
		steps: [ 'step 1', 'step 2', 'step 3' ]
	});
});
