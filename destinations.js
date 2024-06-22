const navItem = document.getElementById("srchLogoBlk");
const srchBar = document.querySelector(".srch-bar");
let bar = "close";

navItem.addEventListener("click", () => {
    if (bar === "close") {
        bar = "open";
        srchBar.style.transform = "translateX(0%)";
        srchBar.style.visibility = "visible";
        srchBar.style.opacity = "1";
    }
    else {
        bar = "close";
        srchBar.style.transform = "translateX(100%)";
        srchBar.style.visibility = "hidden";
        srchBar.style.opacity = "0";
    }  
});