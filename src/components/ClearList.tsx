import React from 'react';
import Button from './atoms/Button';

const ClearList = (props) => (
	<div>
		<Button onClick={props.handleClick} className="btn btn--big btn--error btn--reset" text="Clear List" />
	</div>
);

export default ClearList;
