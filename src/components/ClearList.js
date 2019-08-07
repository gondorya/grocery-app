import React from 'react';
import Button from './atoms/Button';

const ClearList = (props) => (
	<div>
		<Button onClick={props.handleClick} className="btn--reset" text="Clear List" />
	</div>
);

export default ClearList;
