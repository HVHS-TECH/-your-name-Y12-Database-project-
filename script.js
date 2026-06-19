
function fb_login(){
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
};

function fb_handleLogin(_user){
  if(_user){
    console.log("user is logedined")
    GLOBAL_user = _user 
  } else {
    fb_popupLogin();
    console.log("loging in user")
  };
};

function fb_popupLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;
    console.log("log in user")
  })
};

function fb_logout(){
  authenticationListener();
  firebase.auth().signOut();
  console.log("loged out >:) evilness")
};

function writeForm(){
    // Get the form data
    const age = document.getElementById("age").value;
    const name = document.getElementById("name").value;
    console.log(favoriteCash)
    console.log(cashQuantity)
    console.log(favImg)
    console.log(name)
    firebase.database().ref('/users').set(GLOBAL_user.uid)
    firebase.database().ref('/users' + GLOBAL_user.uid).set({
      name: name,
      favoriteCash: favoriteCash,
      cashQuantity: cashQuantity,
      favImg: favImg,
      favImgalt: favImgalt
    })
    firebase.database().ref('/users').once("value", display, fb_readError)
    firebase.database().ref('/users' + GLOBAL_user.uid).once("value", display, fb_readError)
    firebase.database().ref('/').once("value", displayDatabase, fb_readError)
};