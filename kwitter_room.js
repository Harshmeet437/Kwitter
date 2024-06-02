// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCtjQfsPWpusB229FXgalvcvWDY1EaD8j0",
      authDomain: "kwitter-f0ff1.firebaseapp.com",
      databaseURL: "https://kwitter-f0ff1-default-rtdb.firebaseio.com",
      projectId: "kwitter-f0ff1",
      storageBucket: "kwitter-f0ff1.appspot.com",
      messagingSenderId: "427928891180",
      appId: "1:427928891180:web:ac29515b1b9a4a5c0f8689"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");

document.getElementById("username2").innerHTML = "welcome "+ user_name +" ! ";

function add()
{
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child (room_name) .update({
            purpose: "adding room name"
            });

            localStorage.setItem("room_name", room_name);
            window. location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
      localStorage.clear();
      window.location = "index.html";
}
