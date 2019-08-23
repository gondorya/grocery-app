import uuid from 'uuid';

const addRecipe = ({ title = '', description = '', steps = [], date = 0, img = '' } = {}) => {
	return {
		type: 'ADD_RECIPE',
		recipe: {
			id: uuid(),
			title,
			description,
			steps,
			img,
			date
		}
	};
};

const removeRecipe = ({ id = '' } = {}) => {
	return {
		type: 'REMOVE_RECIPE',
		id
	};
};

const editRecipe = (id, updates) => {
	return {
		type: 'EDIT_RECIPE',
		id,
		updates
	};
};

export { addRecipe, removeRecipe, editRecipe };
