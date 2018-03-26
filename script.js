function onSignIn(googleUser){
	var profile=googleUser.getBasicProfile();
	 var id_token = googleUser.getAuthResponse().id_token;
	$("#signin").css("display","none");
	$("#data").css("display","block");
	$("#pic").attr('src',profile.getImageUrl());
	$("#email").text(profile.getEmail());
	$("#data #idnum").text(profile.getId());
	 // console.log('ID: ' + profile.getId());

		// if (auth2.isSignedIn.get()) {
		  // var profile = auth2.currentUser.get().getBasicProfile();
		  console.log('==============================');
		  console.log('Token== \n'+id_token);
		  console.log('==============================');
		  console.log('ID: ' + profile.getId());
		  console.log('Full Name: ' + profile.getName());
		  console.log('Given Name: ' + profile.getGivenName());
		  console.log('Family Name: ' + profile.getFamilyName());
		  console.log('Image URL: ' + profile.getImageUrl());
		  console.log('Email: ' + profile.getEmail());
		// }
    
}


function signOut()
{
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function(){
        
    $("#signin").css("display","block");
	$("#data").css("display","none");
    
	alert("You signOut Succeccfully");
	

	});
}
// var CLIENT_ID='894572283325-drh78usaq6ga39g832dcu1j67p3mdqh2';
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(CLIENT_ID);
// async function verify() {
//   const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: CLIENT_ID  // Specify the CLIENT_ID of the app that accesses the backend
//       // Or, if multiple clients access the backend:
//       //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   });
//   const payload = ticket.getPayload();
//   const userid = payload['sub'];
//   // If request specified a G Suite domain:
//   //const domain = payload['hd'];
// }
// verify().catch(console.error);

