document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('qdTime').addEventListener('keydown', function(event) {

		var event = event || window.event,
			value = this.value

		if(event.keyCode == 13){

			if(!value) {

				notice('Maimaimai.error', '抢单时间不能为空')

				return
			}

			if(isNaN(Date.parse(value))) {


				notice('Maimaimai.error', '时间格式不对哦O(∩_∩)O')

				return
			}

			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

			    //chrome.tabs.sendMessage(tabs[0].id, {qdTime: value})

			    var connect = chrome.tabs.connect(tabs[0].id, {name: +new Date(value) + ''})

			    connect.onMessage.addListener(function(msg) {

				  	notice('Maimaimai.success', '抢单时间为' + value)
				  	
				})
			})

			// chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {

			// 	console.log(req)
			// })

			// notice('Maimaimai.success', '抢单时间为' + value, function() {

			// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

			// 	    chrome.tabs.sendMessage(tabs[0].id, {qdTime: +new Date(value)})
			// 	})
			// })

		}

	})
})