let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginleft = "300px";


function menuToggle() {
    if (menuStatus == false) {
        menu.style.marginleft = "0px";
        menuStatus = true;
    } 
    else if (menuStatus == true) {
        menu.style.marginleft = "300px";
        menuStatus = false;
    }
}

// Event handler instructs the browser to do specific thing oncd downloaded
menuBtn.onclick = menuToggle; //save the function for fucture use but to let the method runs immediately include ()


//Prevent eventHandler Default
let btn1 = btn = document.querySelector(".test-btn");
let form = document.querySelector(".test-form");
let inputTxt = document.querySelector(".input-text");


//prevent browser from auto-refresh or redirect
// Step 1
function changeBtnText(e) {
    e.preventDefault();
    btn.innerHTML = "YAY!";
}

function stopFormSubmit(e) {
    e.preventDefault();
    inputTxt.innerHTML = "Form submitted without redirection";
}

btn.onclick = changeBtnText;
form.onclick = stopFormSubmit;


// step 1 -> functions
function firstFunction() {
    btn.innerHTML = "s1_YAY!";
}
function secondFunction() {
    btn.style.backgroundColor = "red";
}


// Step 1 -> HANDLER
function btnClick(e) {
    e.preventDefault();
    firstFunction();
    secondFunction();
}
btn.onclick = firstFunction; 
btn.onclick = secondFunction;
// HANLDER ENDS



// Step 2 -> EVENT LISTENER
// evenlistener waits if there is no more events before runs
// listen to onclick then perform function
function firstFunction(e, name) { //re-declare firstFunction
    btn.innerHTML = name;
}

btn.addEventListener("click", function(e) {
    firstFunction(e, "Daniel");
});
btn.addEventListener("click", function() {
    btn.style.backgroundColor = "yellow";
});