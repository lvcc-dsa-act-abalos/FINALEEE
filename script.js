//get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.lenght < 1){
        errorNodes[0].innerText = "Name cannot be Blank"
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailValid(email.value)){
        errorNodes[1].innerText = "Invalid Email Address"
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.lenght < 1){
        errorNodes[2].innerText = "Please enter message"
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Succes!"
    }
}


// Clear error / success message

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}


//check if email is valid
function emailValid(email){
    let pattern = /\S+@\S+\. \S/;
    return pattern.test(email);
}