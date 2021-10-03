//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyClRFXqgTcB3B56Qtv9KcYckUFRnT0HFJM",
    authDomain: "p-fd77d.firebaseapp.com",
    databaseURL: "https://p-fd77d-default-rtdb.firebaseio.com",
    projectId: "p-fd77d",
    storageBucket: "p-fd77d.appspot.com",
    messagingSenderId: "521588410303",
    appId: "1:521588410303:web:edffd7f60fa536f850430a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}