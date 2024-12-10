function checkStrength(){
  let pass = document.getElementById("password").value;
  let strengthMessage = document.getElementById("strength-message");
  let strengthBar = document.getElementById("strength-bar");

  let strength = 0;

  if (pass.length >= 8){
    strength += 1;
  }

  if (/[0-9]/.test(pass)){
    strength += 1;
  }

  if (/[A-Z]/.test(pass)){
    strength += 1;
  }

  if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)){
    strength += 1;
  }

  if(strength == 0){
    strengthMessage.innerHTML = "Password is very weak."
    strengthBar.className = "strength-bar Very weak";
  }

  else if(strength == 1){
    strengthMessage.innerHTML = "Password is weak."
    strengthBar.className = "strength-bar weak"
  }

  else if(strength == 2){
    strengthMessage.innerHTML = "Password is medium."
    strengthBar.className = "strength-bar medium"
  }
  else if(strength == 3){
    strengthMessage.innerHTML = "Password is strong."
    strengthBar.className = "strength-bar strong"
  }
  else {
    strengthMessage.innerHTML = "Password is very strong."
    strengthBar.className = "strength-bar very strong"
  }
}




