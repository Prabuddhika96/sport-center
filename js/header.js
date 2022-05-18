// scroll header effect
window.onscroll = function() {
    myFunction()
};

var content = document.getElementById("content");
// var sticky = content.offsetTop;

function myFunction() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 455) {
        document.querySelector('header').style.backgroundColor="gray"; 
    } else {
        document.querySelector('header').style.backgroundColor="rgba(224, 224, 224, 0.527)";
    }
}