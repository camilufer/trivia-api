function IngresoFacebook(){
	if (!firebase.auth().currentUser){
		var provider = new firebase.auth.FacebookAuthProvider();
		provider.addScope('public_profile');
		firebase.auth().singInWithPopup(provider).then (function(result){
			var token = result.credential.accesstoken;
			var user = result.user;
			console.log(user);

		}).catch (function(error) {
			var errorCode = error.code;
			var errorMessage = error.Message;
			var erroremail = error.email;
			var credential = error.credential;
			if (errorCode==='auth/account-exist-whith-different-credential'){
				alert ('Es el mismo usuario')
			}
		});

	}else {
		firebase.auth().singout;
	}
}

document.getElementById('loginfacebook').addEventListener('click', IngresoFacebook, false);
