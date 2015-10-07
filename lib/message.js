var co = require('co');
var redisClient = require('redis').createClient(6379, process.env.REDIS_HOST || 'redishost');
var wrapper = require('co-redis');
var redisCo = wrapper(redisClient);
var transporter = require('nodemailer').createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    }
});

function email(data)
{
  if(!process.env.DISABLE_EMAIL || process.env.DISABLE_EMAIL == 'false'){
    transporter.sendMail({
      from: data.email,
      to: process.env.EMAIL_TO,
      subject: 'Message from site',
      html: '<p>Name: ' + data.name + '<br> Company: ' + data.company + '<br> Email: ' + data.email + '<br> Message: <br>' + data.textbody + '</p>'
    });  
  }
  return;
}

exports.save = co.wrap(function* (data) {
  var dataEmail = {
    name: data.first_name,
    company: data.company,
    email: data.email,
    textbody: data.textbody
  };
  yield redisCo.sadd('messages', JSON.stringify(data));
  yield email(dataEmail);
});
