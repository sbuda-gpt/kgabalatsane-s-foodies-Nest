
let currentSlide = 0;

const slides =

document.querySelectorAll(".slide");

const dots = 
document.querySelectorAll(".dots");


function showSlide(index) {

    if (index >= slides.legth) {
        currentSlide = 0;

    }

    if (index < 0) {
        currentSlide = slides.length - 1;

}

slides.forEach(function(slide) {

slide.classList.remove("active");});

dots.forEach(function(dot) {

    dot.classList.remove("active-dots");});




slides[currentSlide].classList.add("active");


dots[currentSlide].classList.add("active-dot");

}

function changeSlide(direction) {

   currentSlide = currentSlide + direction;

   showSlide(currentSlide);


}

setInterval(function() {

    currentSlide++;

    if (currentSlide >= slides.length)
    {
        currentSlide = 0;


}


showSlide(currentSlide);

}, 4000);








function toggleChat() {

    const chatBox = 
    
    document.getElementById("chatBox");

    chatBox.classList.toggle("show");

}

function sendMessage() {

    const messageInput = 
    document.getElementById("chatMessage");

    const message = 
    messageInput.ariaValueMax.trim();

    if (message === "") {
        alert("Please leave us a review of our services");
        return;

    }

    const phoneNumber = "277936697"

    const whatsappMessage = "Hello Kgabalatsane Foodies Nest !%0A%0A" +

    encodeURIComponent(message);


    const whatsappURL = "https://wa.me/" + phoneNumber

    "?text=" + whatsappMessage;
       
    window.open(whatsappURL,"_blank");

       messageInput.value = "";
       

}





    







