
var timeout

// chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {

// 	chrome.runtime.sendMessage({resp: 'success'})

// 	alarm(req.qdTime, function() {

// 		document.getElementById('J_Go').click()
// 	})
// })

chrome.runtime.onConnect.addListener(function(port) {

	port.postMessage({message: 'success'})

	alarm(+port.name, function() {

		document.getElementById('J_Go').click()
	})

})


function alarm(start, callback) {

    var span = +new Date() - start

    timeout = setTimeout(function() {

        if(span == 0 || (span > 0 && span < 1000)) {

            callback()

            clearTimeout(timeout)

            return 
        }

        alarm(start, callback)
    }, 0)
}