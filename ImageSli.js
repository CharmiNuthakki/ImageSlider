const images = [
    "https://via.placeholder.com/500x300/ff5733/ffffff?text=Image+1",
    "https://via.placeholder.com/500x300/33ff57/ffffff?text=Image+2",
    "https://via.placeholder.com/500x300/5733ff/ffffff?text=Image+3",
    "https://via.placeholder.com/500x300/ff33a1/ffffff?text=Image+4"
];

let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    sliderImage.src = images[currentIndex];
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});


updateImage();
