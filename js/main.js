(function(){
	var httpRequest,
	ajaxText = document.querySelector(".placeholder"),
	ajaxButton = document.querySelector(".wrapper");

	function makeRequest(url){
		httpRequest = new XMLHttpRequest();

		if (!httpRequest){ //older browsers may not support, so we need a 
			alert('Giving up, your browser is way too old');
			return false; //return makes the function finish and quit
		}

		httpRequest.onreadystatechange = showResult; 
		httpRequest.open('GET', url);
		httpRequest.send();
	}

	function showResult(){
		if (httpRequest.readyState === XMLHttpRequest.DONE){ //done state
			if(httpRequest.status === 200){
				var response = httpRequest.responseText;
				ajaxText.innerHTML = response;
			} else {
				console.log('There was a problem with your request');
			}

		}
	}


	ajaxButton.addEventListener('click', function() {makeRequest('text.txt');}, false);

})();