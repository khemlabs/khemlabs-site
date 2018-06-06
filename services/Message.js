const redis = require('redis'),
	log = require('./Log'),
	client = redis.createClient(6379, 'redishost');

if (process.env.DISABLE_EMAIL && process.env.DISABLE_EMAIL != 'false') {
	log.info('Email disabled', 'services/Message', 'config');
} else {
	log.info('Configuring email (' + process.env.GMAIL_USER + ')...', 'services/Message', 'config');
	const transporter = require('nodemailer').createTransport({
		service: 'gmail',
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASSWORD
		}
	});
}

const email = data => {
	if (process.env.DISABLE_EMAIL && process.env.DISABLE_EMAIL != 'false') {
		return log.info('Email disabled', 'services/Message', 'email');
	}
	log.info(`Sending email to (${process.env.EMAIL_TO})`, 'services/Message', 'email');
	transporter.sendMail({
		from: data.email,
		to: process.env.EMAIL_TO,
		subject: 'Message from site',
		html: `<p>
			Name: ${data.name}<br> 
			Company: ${data.company}<br> 
			Email: ${data.email}<br> 
			Message: <br>
			${data.textbody}
			</p>`
	});
	return;
};

// REDIS CLIENT
client.on('error', err => log.error(err, 'services/message', 'save'));

exports.save = (data, callback) => {
	const dataEmail = {
		name: data.first_name,
		company: data.company,
		email: data.email,
		textbody: data.textbody
	};
	email(dataEmail);
	client.sadd('messages', JSON.stringify(data));
};
