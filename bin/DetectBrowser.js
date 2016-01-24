	var browser=navigator.userAgent;
	var nVer = navigator.appVersion;
	var browserName  = navigator.appName;
	var fullVersion  = ''+parseFloat(navigator.appVersion); 
	var majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;

	
	if (browser.indexOf("Firefox")==-1 && browser.indexOf("Opera")==-1 && browser.indexOf("OPR")==-1){
		window.location.replace("browser.html");
	}
	else{
		// In Opera 15+, the true version is after "OPR/" 
		if ((verOffset=browser.indexOf("OPR/"))!=-1) {
		 browserName = "Opera";
		 fullVersion = browser.substring(verOffset+4);
		}
		// In older Opera, the true version is after "Opera" or after "Version"
		else if ((verOffset=browser.indexOf("Opera"))!=-1) {
		 browserName = "Opera";
		 fullVersion = browser.substring(verOffset+6);
		 if ((verOffset=browser.indexOf("Version"))!=-1) 
		   fullVersion = browser.substring(verOffset+8);
		}
		// In Firefox, the true version is after "Firefox" 
		else if ((verOffset=browser.indexOf("Firefox"))!=-1) {
		 browserName = "Firefox";
		 fullVersion = browser.substring(verOffset+8);
		}
		// In most other browsers, "name/version" is at the end of userAgent 
		else if ( (nameOffset=browser.lastIndexOf(' ')+1) < 
				  (verOffset=browser.lastIndexOf('/')) ) 
		{
		 browserName = browser.substring(nameOffset,verOffset);
		 fullVersion = browser.substring(verOffset+1);
		 if (browserName.toLowerCase()==browserName.toUpperCase()) {
		  browserName = navigator.appName;
		 }
		}
		// trim the fullVersion string at semicolon/space if present
		if ((ix=fullVersion.indexOf(";"))!=-1)
		   fullVersion=fullVersion.substring(0,ix);
		if ((ix=fullVersion.indexOf(" "))!=-1)
		   fullVersion=fullVersion.substring(0,ix);

		majorVersion = parseInt(''+fullVersion,10);
		if (isNaN(majorVersion)) {
		 fullVersion  = ''+parseFloat(navigator.appVersion); 
		 majorVersion = parseInt(navigator.appVersion,10);
		}

		if(browserName =="Firefox" && majorVersion < 43){
				alert("You need to update your Firefox browser");
				window.open("http://www.firefox.com");
		}
			if(browserName =="Opera" && majorVersion < 36){
				alert("You need to update your Opera browser");
				window.location.replace("http://www.opera.com");
			}
}
