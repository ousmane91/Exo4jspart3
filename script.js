//fonction pour mettre les inputs en rouge
function inputRed() {
  document.getElementById('password').style.border ='1px solid red';
  document.getElementById('confirmPassword').style.border ='1px solid red';

  if (document.getElementById('password').value != document.getElementById('confirmPassword').value) {

  }else if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
    document.getElementById('password').style.border = "1px solid green";
    document.getElementById('confirmPassword').style.border = "1px solid green";

  }
}
