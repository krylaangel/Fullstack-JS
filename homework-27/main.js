const images = document.querySelectorAll('.image');
const scrollButtons = document.querySelectorAll('.scroll-button');
let indexImages = 0;

function showImages(index) {
    images[indexImages].classList.remove('active');
    images[index].classList.add('active');
    indexImages = index;
}

function scrollImages() {
    scrollButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            if (event.target.classList.contains('scroll-right')) {
                let index = indexImages + 1;
                if (index >= images.length) {
                    index = 0;
                }
                showImages(index)
            } else if (event.target.classList.contains('scroll-left')) {
                let index = indexImages - 1;
                if (index < 0) {
                    index = images.length - 1;
                }
                showImages(index)
            }
        });
    })
}

scrollImages();
showImages(indexImages);