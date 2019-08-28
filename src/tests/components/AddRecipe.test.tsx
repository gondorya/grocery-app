import React from 'react';
import { shallow } from 'enzyme';
import AddRecipe from '../../components/AddRecipe';
import { Provider } from 'react-redux';
import store from '../../stores/configureStore';

test('should render Add Recipe page', () => {
	const onSubmit = jest.fn();
	const history = {
		push: jest.fn()
	};

	const wrapper = shallow(
		<Provider store={store()}>
			<AddRecipe newRecipe={onSubmit} history={history} />
		</Provider>
	);

	expect(wrapper).toMatchSnapshot();
});
