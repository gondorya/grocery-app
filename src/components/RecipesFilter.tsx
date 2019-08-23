import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByTitle } from '../actions/filters';

const RecipesFilter = (props) => (
	<div>
		<form className="form">
			<label>
				Search:{' '}
				<input
					type="text"
					value={props.filters.text}
					onChange={(e) => {
						props.dispatch(setTextFilter(e.target.value));
					}}
				/>
			</label>
			<label>
				Sort by:
				<select
					onChange={(e) => {
						props.dispatch(e.target.value === 'title' ? sortByTitle() : sortByDate());
					}}
				>
					<option value="date">Date</option>
					<option value="title">Title</option>
				</select>
			</label>
		</form>
	</div>
);

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(RecipesFilter);
