import React from 'react';

const Edit = (props) => (
	<div>
		<p>Page with id {props.match.params.id}</p>
	</div>
);

export default Edit;
