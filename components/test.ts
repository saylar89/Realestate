//   var lowerCaseLetters = /[a-z]/g;
//   var upperCaseLetters = /[A-Z]/g;
//   var numbers = /[0-9]/g;

//   if (email.length == 0 && pass.length == 0) {
//     document.getElementById("checkEmail").innerHTML =
//       "Please fill in email";
//     document.getElementById("checkPass").innerHTML =
//       "Please fill in  password";
//   } else if (pass.length == 0) {
//     document.getElementById("checkEmail").innerHTML =
//       "Please fill in password";
//   } else if (email.length == 0) {
//     document.getElementById("checkEmail").innerHTML =
//       "Please fill in email";
//   } else if (pass.length < 8) {
//     document.getElementById("checkEmail").innerHTML =
//       "Password should contain at least 8 character";
//   } else if (!pass.match(numbers)) {
//     document.getElementById("checkEmail").innerHTML =
//       "please add 1 number";
//   } else if (!pass.match(upperCaseLetters)) {
//     document.getElementById("checkEmail").innerHTML =
//       "please add 1 uppercase letter";
//   } else if (!pass.match(lowerCaseLetters)) {
//     document.getElementById("checkEmail").innerHTML =
//       "please add 1 lowercase letter";
//   } else if (i.email === data.email) {
//     document.getElementById("checkEmail").innerHTML =
//       "that email address is already in use";
//   }
//    else {
//     const sum = [...users, data];
//     setUsers(sum);
//     localStorage.setItem("user", JSON.stringify(sum));
//     alert("Your account has been created");
//   }
