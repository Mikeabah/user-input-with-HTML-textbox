// How to accept user input with HTML textbox
let username;
document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
};
