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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
