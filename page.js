const firebaseConfig = {
    apiKey: "AIzaSyCdhOUabvNTQUST5-lB2ndqvqI-kW3qUTM",
    authDomain: "cutebird-e923d.firebaseapp.com",
    databaseURL: "https://cutebird-e923d-default-rtdb.firebaseio.com",
    projectId: "cutebird-e923d",
    storageBucket: "cutebird-e923d.appspot.com",
    messagingSenderId: "753755006036",
    appId: "1:753755006036:web:49838d679bd412b31b79c1",
    measurementId: "G-S7YE4JVVW8"
  };

  firebase.initializeApp(firebaseConfig);
	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}
    


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }