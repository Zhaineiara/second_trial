//GOAL 1
var openModalButton1 = document.getElementById("plan-1");
var modal1 = document.getElementById("myModal1");
var closeModalButton1 = document.getElementById("x-button1");

openModalButton1.addEventListener("click", function() {
    modal1.style.display = "block";
});

closeModalButton1.addEventListener("click", function() {
    modal1.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
});

//GOAL 2
var openModalButton2 = document.getElementById("plan-2");
var modal2 = document.getElementById("myModal2");
var closeModalButton2 = document.getElementById("x-button2");

openModalButton2.addEventListener("click", function() {
    modal2.style.display = "block";
});

closeModalButton2.addEventListener("click", function() {
    modal2.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});

//GOAL 3
var openModalButton3 = document.getElementById("plan-3");
var modal3 = document.getElementById("myModal3");
var closeModalButton3 = document.getElementById("x-button3");

openModalButton3.addEventListener("click", function() {
    modal3.style.display = "block";
});

closeModalButton3.addEventListener("click", function() {
    modal3.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
});

//GOAL 4
var openModalButton4 = document.getElementById("plan-4");
var modal4 = document.getElementById("myModal4");
var closeModalButton4 = document.getElementById("x-button4");

openModalButton4.addEventListener("click", function() {
    modal4.style.display = "block";
});

closeModalButton4.addEventListener("click", function() {
    modal4.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal4) {
        modal4.style.display = "none";
    }
});

//GOAL 5
var openModalButton5 = document.getElementById("plan-5");
var modal5 = document.getElementById("myModal5");
var closeModalButton5 = document.getElementById("x-button5");

openModalButton5.addEventListener("click", function() {
    modal5.style.display = "block";
});

closeModalButton5.addEventListener("click", function() {
    modal5.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal5) {
        modal5.style.display = "none";
    }
});

//GOAL 6
var openModalButton6 = document.getElementById("plan-6");
var modal6 = document.getElementById("myModal6");
var closeModalButton6 = document.getElementById("x-button6");

openModalButton6.addEventListener("click", function() {
    modal6.style.display = "block";
});

closeModalButton6.addEventListener("click", function() {
    modal6.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal6) {
        modal6.style.display = "none";
    }
});

//GOAL 7
var openModalButton7 = document.getElementById("plan-7");
var modal7 = document.getElementById("myModal7");
var closeModalButton7 = document.getElementById("x-button7");

openModalButton7.addEventListener("click", function() {
    modal7.style.display = "block";
});

closeModalButton7.addEventListener("click", function() {
    modal7.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal7) {
        modal7.style.display = "none";
    }
});

//GOAL 8
var openModalButton8 = document.getElementById("plan-8");
var modal8 = document.getElementById("myModal8");
var closeModalButton8 = document.getElementById("x-button8");

openModalButton8.addEventListener("click", function() {
    modal8.style.display = "block";
});

closeModalButton8.addEventListener("click", function() {
    modal8.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal8) {
        modal8.style.display = "none";
    }
});


//SLIDESHOW
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

/*
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
*/