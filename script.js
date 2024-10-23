//ON-SCROLL NAVBAR SHADOW --->

window.onscroll = function navOnScroll() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("navigation").style.boxShadow = "rgb(125, 125, 125) 0px 1px 25px -5px";
        document.getElementById("toTop").style.display = "block";
    }
    else {
        document.getElementById("navigation").style.boxShadow = "none";
        document.getElementById("toTop").style.display = "none";
    }
}

//ON-HOVER DESTINATION TAB --->

const navItem2 = document.getElementsByClassName('nav-item2')[0];
const allStates = document.getElementsByClassName('all-states-india')[0];

navItem2.addEventListener("mouseenter", () => {

    allStates.style.visibility = "visible";
    allStates.style.opacity = "1";
    allStates.style.transform = "translateY(0.5rem)";

    allStates.addEventListener("mouseenter", () => {
        allStates.style.visibility = "visible";
        allStates.style.opacity = "1";
        allStates.style.transform = "translateY(0.5rem)";
    });

    allStates.addEventListener("mouseleave", () => {
        allStates.style.visibility = "hidden";
        allStates.style.opacity = "0";
        allStates.style.transform = "translateY(5rem)";
    });

});

navItem2.addEventListener("mouseleave", () => {
    allStates.style.opacity = "0";
    allStates.style.visibility = "hidden";
    allStates.style.transform = "translateY(5rem)";
});

// ON-CLICK SIGNUP OPTION REVEAL

const signUpButton = document.querySelector('.nav-item5');
const signUpReveal = document.querySelector('#signUp');
const signUpForm = document.querySelector('#signUpForm');
const logInForm = document.querySelector('#logInForm');
const cancelBtn = document.querySelector('.cancel-btn');

const timeOut = setTimeout(() => {
    signUpReveal.style.transform = "translateY(0%)";
    signUpReveal.style.opacity = "1";
},10000);

signUpButton.addEventListener("click", () => {
    signUpReveal.style.transform = "translateY(0%)";
    signUpReveal.style.opacity = "1";
    clearTimeout(timeOut);
});

cancelBtn.addEventListener("click", () => {
    signUpReveal.style.transform = "translateY(100%)";
    signUpReveal.style.opacity = "0";
    signUpForm.reset();
    logInForm.reset();
});

// ON-CLICK LOGIN & SIGNUP IN FORMS 

const logSpan = document.querySelector('.logSpan');
const signSpan = document.querySelector('.signSpan');
const logIn = document.querySelector('.inner-logIn');
const signUp = document.querySelector('.signUp01');

logSpan.addEventListener("click", () => {
    logIn.style.opacity = "1";
    logIn.style.zIndex = "3";
    signUp.style.opacity = "0";
    signUp.style.zIndex = "-3";
    logIn.style.transition = "1s ease";
    signUp.style.transition = "1s ease";
    logIn.style.transform = "translateX(0rem)";
    signUp.style.transform = "translateX(-8rem)";
});

signSpan.addEventListener("click", () => {
    logIn.style.opacity = "0";
    logIn.style.zIndex = "-3";
    signUp.style.opacity = "1";
    signUp.style.zIndex = "3";
    logIn.style.transition = "1s ease";
    signUp.style.transition = "1s ease";
    logIn.style.transform = "translateX(-8rem)";
    signUp.style.transform = "translateX(0rem)";
});

// CHANGE DARK-LIGHT MODE

// const changeMode = document.querySelector("#changeMode");
// const destinations = document.querySelector("#destinations");
// const searchDestination = document.querySelector("#searchDestination");
// const navigation = document.querySelector("#navigation");
// const allStatesIndia = document.querySelector(".all-states-india");
// let currentMode = "light";

// changeMode.addEventListener("click", () => {
//     if (currentMode === "light") {
//         currentMode = "dark";
//         changeMode.innerHTML = "LIGHT";
//         changeMode.style.backgroundColor = "green";
//         destinations.style.backgroundColor = "#252525";
//         searchDestination.style.backgroundColor = "#252525";
//         navigation.style.backgroundColor = "#252525";
//         allStatesIndia.style.backgroundColor = "#212121";
//         searchDestination.style.color = "#fff";
//     }
//     else {
//         currentMode = "light";
//         changeMode.innerHTML = "DARK";
//         changeMode.style.backgroundColor = "#1a662b";
//         destinations.style.backgroundColor = "#fff";
//         searchDestination.style.backgroundColor = "#fff";
//         navigation.style.backgroundColor = "#fff";
//         allStatesIndia.style.backgroundColor = "#fff";
//         searchDestination.style.color = "#252525";
//     }
// });

// ON-CLICK COPY CONTACT

// const cntMail = document.getElementById("cntMail");
// const cntCopy = document.getElementById("cntCopy");

// cntCopy.addEventListener("click", () => {
//     cntMail.select();
//     cntMail.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(cntMail.value);
//     cntCopy.innerHTML = "Copied &#10004;";
// });

// cntCopy.addEventListener("mouseleave", () => {
//     cntCopy.innerHTML = "Copy Email";
// });
