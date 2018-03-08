

/*
	Scrapes all text entered for IPs. NOTE: IPs must be separated from all other text by a newline 
*/
function scrapeIPs() {
	var toScrape = document.getElementById('textinput').value.split('\n');
	var confirmedIPs = [];
	for(var i = 0; i < toScrape.length; i++) {
		if (isIP(toScrape[i])) {
			confirmedIPs.push(toScrape[i]);
		}
	}
	listValidIPs(confirmedIPs);
	document.getElementById('answer').focus();
}
/*
	Regex from: https://stackoverflow.com/questions/4460586/javascript-regular-expression-to-check-for-ip-addresses
	
	Returns true for a valid IP format. 
*/
function isIP(ip) {
	if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {  
		return true;
	}  else {
		return false;
	}
}
/*
	Populates the answer textarea with IP addresses separated by commas.
	ips: array holidng ONLY valid IPs
*/
function listValidIPs(ips) {
	var ipString = ips.join();
	
	document.getElementById('answer').value = ipString;
	document.getElementById('answerTag').innerText = "Answer: " + ips.length + " IP addresses";
}
/*
	clears the page. Could've reloaded the page..
*/
function clearPage() {
	document.getElementById('answer').value = "";
	document.getElementById('textinput').value = "";
	document.getElementById('answerTag').innerText = "Answer:";
}

