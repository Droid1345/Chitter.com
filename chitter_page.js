var firebaseConfig = {
    apiKey: "AIzaSyDzQvG5v6erx8GVNyTiwesOOA_D6dlj2y0",
    authDomain: "kwitter-87f9d.firebaseapp.com",
    databaseURL: "https://kwitter-87f9d-default-rtdb.firebaseio.com",
    projectId: "kwitter-87f9d",
    storageBucket: "kwitter-87f9d.appspot.com",
    messagingSenderId: "790061432083",
    appId: "1:790061432083:web:5a5e6a98aee2915abeaee6"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function getData()
  { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
} });  }); }

    getData();

    function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });

      document.getElementById("msg").value=""
}