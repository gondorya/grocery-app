import React from 'react';

const RecipesFilter = () => (
	<div>
		<form className="form">
			<label>
				Search: <input type="text" />
			</label>
			<label>
				Sort by:
				<select>
					<option>Date</option>
					<option>Title</option>
				</select>
			</label>
		</form>
	</div>
);

export default RecipesFilter;
