function registerInterest() {
    var email = document.getElementById('email').value;

    // Basic validation
    if (email === '') {
        alert('Please fill in both your name and email.');
        return;
    }

    // TODO: Implement actual submission logic here.
    console.log('Interest registered:', email);
    alert('Thank you for your interest! We will be in touch.');
}


let slideIndex = 0;
showSlides(); // Call showSlides function when the page loads

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
