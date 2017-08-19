function show(id) {
    document.getElementById("AbraCadabra").style.visibility = "visible";
	
	if (id == "campus")
		document.getElementById("AbraCadabra").innerHTML = "View our expansive online gallery for a view of our wonderful campus!";
	else if (id == "online")
		document.getElementById("AbraCadabra").innerHTML = "Get scheduled online for classes and access to academy resources.";
	else if (id == "company")
		document.getElementById("AbraCadabra").innerHTML = "Find out the list of great company references we have for our graduates!";
	else if (id == "signin")
		document.getElementById("AbraCadabra").innerHTML = "Login or register today!";
  }

  function hide(id) {
    document.getElementById("AbraCadabra").style.visibility = "hidden";
	}
	
function comingSoon() {
	alert("Additional Details coming soon!");
}