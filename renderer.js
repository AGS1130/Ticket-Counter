const logForm = document.getElementsByClassName('btn btn-warning')[0];
const registerForm = document.getElementsByClassName('btn btn-warning')[1];

passwordToggle = () => {
    const radio = document.getElementById("toggle");
    const password = document.getElementById("entry-field");
    
    if(radio.checked === true){
      password.type = "text";
    } else {
      password.type = "password";
    }
};

logForm.addEventListener("click", function(){
    const logIn = document.getElementById("log-in");
    const register = document.getElementById("register");
    
    if (logIn.style.display === "none") {
        logIn.style.display = "block";
        register.style.display = "none"
    } else {
        logIn.style.display = "none";
        register.style.display = "block";
    }
})

registerForm.addEventListener("click", function(){
    const logIn = document.getElementById("log-in");
    const register = document.getElementById("register");
    
    if (logIn.style.display === "none") {
        logIn.style.display = "block";
        register.style.display = "none"
    } else {
        logIn.style.display = "none";
        register.style.display = "block";
    }
})

const printList = document.getElementById('print-list');
const list = document.getElementById('list');

const modalFaculty = document.getElementById('switchToFaculty');
const modalAttendee = document.getElementById('switchToAttendee');

printList.addEventListener("click", function(){
    const sqlList = document.getElementById("sql-list");
    const options = document.getElementById("options");
    
    if (sqlList.style.display === "none") {
        sqlList.style.display = "block";
        list.style.display = "block";
        options.style.display = "none";
    } else {
        sqlList.style.display = "none";
        list.style.display = "none";
        options.style.display = "block";
    }
});

list.addEventListener("click", function(){
    const sqlList = document.getElementById("sql-list");
    const options = document.getElementById("options");
    
    if (options.style.display === "none") {
        options.style.display = "block";
        list.style.display = "none";
        sqlList.style.display = "none";
    } else {
        options.style.display = "none";
        sqlList.style.display = "block";
        list.style.display = "block";
    }
});

modalFaculty.addEventListener("click", function(){
    const attendee = document.getElementsByClassName("addAttendees");
    const faculty = document.getElementsByClassName("add-internToFaculty");
    
    for(let i = 0; i < attendee.length; i++){
        if (faculty[i].style.display === "none") {
            faculty[i].style.display = "inline";
            attendee[i].style.display = "none";
        } else {
            faculty[i].style.display = "none";
            attendee[i].style.display = "inline";
        }
    }
});

modalAttendee.addEventListener("click", function(){
    const attendee = document.getElementsByClassName("addAttendees");
    const faculty = document.getElementsByClassName("add-internToFaculty");
    
    for(let i = 0; i < attendee.length; i++){
        if (attendee[i].style.display === "none") {
            faculty[i].style.display = "none";
            attendee[i].style.display = "inline";
        } else {
            faculty[i].style.display = "inline";
            attendee[i].style.display = "none";
        }
    }
});

const passwordQuery = () => {
  let userRetrival = prompt('Enter your password');
  
  let roomNumberQ = ''
  let firstInitialQ;
  let lastInitialQ = userRetrival[userRetrival.length - 1];
  
  for(let i = 0; i < userRetrival.length - 1; i++){
    if(isNaN(parseInt(userRetrival[i]))){
      firstInitialQ = userRetrival[i];
    } else {
      roomNumberQ += userRetrival[i];
    }
  }
};