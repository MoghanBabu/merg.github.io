function formValidation(){
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var number = document.getElementById('number');
    var password = document.getElementById('password');
    if (firstname == null){
      document.getElementById('msg').innerText = "*All Fields should be filled."
      firstname.focus();
      return false;
    }
    if (inputAlphabet(firstname,"*Please only Alphabets.")){
    if (inputAlphabet(lastname,"*Please only Alphabets.")){
    if (lengthDefine(username,6,8)){
    if (emailValidation(email,"*Please enter a valid email address.")){
    return true;
    if (number.value.length > 10){
      document.getElementById('msg').innerText = "*Please enter a Valid number."
      number.focus();
      return false;
    }
    }
    }
    }
    }
    return false;
  }

  function inputAlphabet(inputtext,alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
      if (inputtext.value.match(alphaExp)) {
      return true;
    }
    else {
      document.getElementById('p1').innerText = alertMsg;
      inputtext.focus();
      return false;
    }
}
  function textAlphanumeric(inputtext, alertMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
      if (inputtext.value.match(alphaExp)) {
        return true;
      }
      else {
        document.getElementById('p2').innerText = alertMsg;
        inputtext.focus();
        return false;
      }
  }
  function lengthDefine(inputtext, min, max) {
    var uInput = inputtext.value;
      if (uInput.length >= min && uInput.length <= max) {
        return true;
      }
      else {
        document.getElementById('p3').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
        inputtext.focus();
        return false;
      }
  }
  }
