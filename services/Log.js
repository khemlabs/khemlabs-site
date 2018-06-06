exports.info = (msg, file, functionName, request) => log(msg, file, functionName, request, 'info');

exports.warning = (msg, file, functionName, request) => log(msg, file, functionName, request, 'warning');

exports.error = (msg, file, functionName, request) => log(msg, file, functionName, request, 'error');

const log = (data, file, functionName, request, type) => {
	let message = getMessage(file, functionName, request, type);
	message += parseMessageType(data);
	switch (type) {
		case 'info':
			console.info(message);
			break;
		case 'warning':
			console.warn(message);
			break;
		case 'error':
			console.error(message);
			break;
	}
};

const parseMessageType = data => {
	if (typeof data == 'object') {
		const msg = JSON.stringify(data);
		return msg == '{}' ? String(data) : msg;
	}
	return String(data);
};

const getMessage = (file, functionName, request, type) => {
	const d = new Date();
	const date = d.toISOString();
	const browser = request && request.headers && request.headers['user-agent'] ? request.headers['user-agent'] : false;
	return browser
		? `[${file}, ${functionName}][${date}][${type}][${browser}] `
		: `[${file}, ${functionName}][${date}][${type}] `;
};
