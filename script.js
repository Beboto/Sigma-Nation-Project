let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function formValidate(){
  const fname=document.getElementById('fname').value;
  const inEmail=document.getElementById('inEmail').value;
  const phone=document.getElementById('phone').value;


  function validateEmail(email){
    const pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  function validatePhone(phoneNumber){
    const pattern=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    return pattern.test(phoneNumber);
  }

  if(fname===""){
    alert("Enter your name.");
  }else if(!validatePhone(phone)){
      alert("Enter your phone number.")
    }else if(!validateEmail(inEmail)){
      alert("Enter a valid email id example : 'mymail@gmail.com'")
  }
};