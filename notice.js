
function notice(name, message, callback) {

	var _name, _message

	if(arguments.length == 1) {

		_name = 'Maimaimai.notice'
		_message = name

	} else {

		_name = name
		_message = message
	}

	chrome.notifications.create(_name, {
    	type: 'basic',
    	title: 'Maimaimai',
    	iconUrl: '/resource/icon48.png',
    	message: _message,
    	isClickable: false
    }, function(id) {

    	if(typeof callback === 'function') callback(id)
    })
}