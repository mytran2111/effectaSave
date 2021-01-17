let startButton;
let signButton; 
let registerButton; 

function handelLoad(){
  startButton = document.getElementById('start');
  signButton = document.getElementById('signIn');
  registerButton = document.getElementById('register');

  startButton.addEventListener('click', handleClickStart);
  signButton.addEventListener('click', handleSignIn);
  registerButton.addEventListener('click', handleRegister);
}

function handleClickStart(){

}

function handleRegister(){

}

function handleSignIn(){
  
} 

window.addEventListener('load', handelLoad); 