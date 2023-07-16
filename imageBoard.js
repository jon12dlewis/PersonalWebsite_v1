let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideShowItem");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;

    var text = "";

    switch (n) {
        case 1:
            text = "Title page for the game";
            break;
        case 2:
            text = "The home base is a location the players visit between journeys into the mine.<br>Recources collected in the mine can be used here to upgrade and craft new gear.";
            break;
        case 3:
            text = "The crafting station can be used to upgrade and craft weapons to aid the<br> player in the mine.";
            break;
        case 4:
            text = "While exploring the mine the player can find recources to collect to aid them on their journey!";
            break;
        case 5:
            text = "The cave is dark and full of monsters protecting the treasures inside!";
            break;
        case 6:
            text = "Use lanterns to light your path as you explore the mine!";
            break;

    }

    document.getElementById("imageDescription").innerHTML = text;
}