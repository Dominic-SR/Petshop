const pets_container = document.getElementById('pets-container');
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let scrollArea = 1000 - windowHeight; 

let catImg = document.getElementsByClassName('cat');

window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;
    console.log("1222221");
    catImg.style.left = scrollPercent*window.innerWidth + 'px';
})