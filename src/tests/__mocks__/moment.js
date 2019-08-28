const moment = require.requireActual('moment');

export default (time = '20180915') => {
	return moment(time);
};
