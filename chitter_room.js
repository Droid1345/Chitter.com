const firebaseConfig = {
    apiKey: "AIzaSyDzQvG5v6erx8GVNyTiwesOOA_D6dlj2y0",
    authDomain: "kwitter-87f9d.firebaseapp.com",
    databaseURL: "https://kwitter-87f9d-default-rtdb.firebaseio.com",
    projectId: "kwitter-87f9d",
    storageBucket: "kwitter-87f9d.appspot.com",
    messagingSenderId: "790061432083",
    appId: "1:790061432083:web:5a5e6a98aee2915abeaee6"
  };    

  const app = initializeApp(firebaseConfig)
  user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
        room_name = document.getElementById("room_name").value;

       localStorage.setItem("Roomname",room_name);
   
       window.location = "index.html";
 }
 function getdata()
 {
       firebase.database().ref("/").on('value',function (snapshot){
             document.getElementById("output").innerHTML=" ";
 snapshot.forEach(function(childsnapshot){
       childKey=childsnapshot.key;
       Room_names=childKey;
       console.log("room name -"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
       });
 });
 } 
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitterpage.html";
 }
 
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="Index.html";
 }
