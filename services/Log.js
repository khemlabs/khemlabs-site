exports.info = function(msg, file, functionName, request){
  log(msg, file, functionName, request, 'info');
};

exports.warning = function(msg, file, functionName, request){
  log(msg, file, functionName, request, 'warning');
};

exports.error = function(msg, file, functionName, request){
  log(msg, file, functionName, request, 'error');
}; 

function log(data, file, functionName, request, type){
  var message = getMessage(file, functionName, request, type);
  message += parseMessageType(data);
  switch(type){
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
}
function parseMessageType(data){
  if(typeof data == 'object'){
    var msg = JSON.stringify(data);
    return msg == '{}' ? String(data) : msg;
  } else {
    return String(data);
  }
}
function getMessage(file, functionName, request, type){
  var d = new Date();
  var browser = request && request.headers && request.headers['user-agent'] ? request.headers['user-agent'] : false;
  return (browser)
      ? '[' + file + ', ' + functionName + '][' + d.toISOString() + '][' + type + '][' + browser + '] ' 
      : '[' + file + ', ' + functionName + '][' + d.toISOString() + '][' + type + '] ';
}