function remove9gag() {
	var streamstories = document.getElementsByClassName('mvm');
	for (var i = 0; i < streamstories.length; ++i) {
		if (streamstories[i].getElementsByTagName('a')) {
			if (streamstories[i].getElementsByTagName('a')[0]['href'].search(/9gag.com/) != -1) {
				// it's a 9gag link, don't show it
				if (streamstories[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display != "none") {
					streamstories[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none";
				}
			}
		}
	}
}
remove9gag();
setInterval(remove9gag, 200);
