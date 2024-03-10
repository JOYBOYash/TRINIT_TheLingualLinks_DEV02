


























//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyBgd5TasgU1o1GFud1Nv98wiDTzNMzepnw",
//     authDomain: "lingua-link-2907a.firebaseapp.com",
//     databaseURL: "https://lingua-link-2907a-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "lingua-link-2907a",
//     storageBucket: "lingua-link-2907a.appspot.com",
//     messagingSenderId: "451405127324",
//     appId: "1:451405127324:web:71d41d5791af4c6a68d759"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   const auth = firebase.auth()
//   const database = firebase.database()


// //   Initialisationn of Authentication Ends 




// function register (){
//     email = document.getElementById('mailid').value
//     user = document.getElementById('Username').value
//     passkey = document.getElementById('passkey').value

//     // if ( validate_passkey(passkey) == false) {
//     //     alert("Password must be more than 6 characters! ")
//     // }

//     auth.createUserWithEmailAndPassword(email,passkey)
//     .then(function(){


//         var user = auth.currentUser

//         var database_ref = database.ref()

//         var user_data = {
//             email : mailid,
//             user : Username,
//             last_login : Date.now()
//         }

//         database_ref.child('users/' + user.uid).set(user_data)

//         alert('user created!')

//     })
//     .catch(function(error){
//         var error_code = error.code
//         var error_msg = error.message

//         alert(error_msg)
//     })

// }

// function validate_email(email) {
//     expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if(expression.test(email) == true ){
//         return true
//     }else{
//         return false
//     }
// }


// function validate_passkey(passkey) {
//     if(passkey > 6 ){
//         return true
//     }else{
//         return false
//     }
// }

// let reg_btn = document.querySelector(".reg-btn");
//  let log_btn = document.querySelector(".log-btn");
//  let form = document.querySelector(".form-bx");

// reg_btn.addEventListener("click", ()=>{
//     form.classList.add("change-form");
// })

// log_btn.addEventListener("click", ()=>{
//     form.classList.remove("change-form");
// })



























