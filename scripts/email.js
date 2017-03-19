function doSubmit(branch) {
	var e = document.getElementById("email-input");
   var b = document.getElementById("submit-email");
   var t = document.getElementById("thanks-email");
   var l = document.getElementById("loading");
	if (e.value.includes("@")) {
      l.style.display = "block";
      b.style.display = "none";	
		addResponse(e.value, branch).then(function (){
         e.style.display = "none";	
         t.style.display = "block";
         l.style.display = "none";
      })
	}
}

function addResponse(e, branch) {
	var d = new Date();
 	var postData = {
   	date: d.toString(),
		email: e,
  	};

  	var newPostKey = firebase.database().ref().child(branch).push().key;

  	var updates = {};
  	updates['/' + branch + '/' + newPostKey] = postData;
  	return firebase.database().ref().update(updates);
}
