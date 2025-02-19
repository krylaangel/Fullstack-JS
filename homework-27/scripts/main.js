const sliderContainer = document.getElementById("slider");
const imagesContainer = document.getElementById('gallery');
const scrollButtons = document.querySelectorAll('.scroll-button');
const circleContainer = document.querySelector('.circle__container');
const timeOut = 1;
let isAutoScrolling = false;
let isButtonClicked = false;
let autoChangeInterval;
let startX = 0;
let endX = 0;
const defaultDifference = 50;
let indexImages = 0;
let images = []
const gallery = [
    'gory_sneg_relef_226184_1920x1080.jpg',
    'gory_vershiny_ozero_173286_1920x1080.jpg',
    'ozero_otrazhenie_gory_1223430_1920x1080.jpg'
]


function generateImages() {
    imagesContainer.innerHTML = '';
    images = [];
    if (gallery.length === 0) return;
    gallery.forEach(file => {
        const img = document.createElement('img');
        img.src = 'images/' + file;
        img.alt = file;
        img.classList.add('image');
        imagesContainer.appendChild(img);
        images.push(img);
    })
}

function generateCircles() {
    circleContainer.innerHTML = '';
    images.forEach((_, index) => {
        const circle = document.createElement("div");
        circle.classList.add('circle');

        if (index === 0) {
            circle.classList.add('active');
        }
        circle.addEventListener('click', () => {
            showImages(index);
        })
        circleContainer.appendChild(circle);
    });
}

function updateCircle(index) {
    document.querySelectorAll('.circle').forEach((circle, i) => {
        circle.classList.toggle('active', i === index);
    })
}

function showImages(index) {
    images[indexImages].classList.remove('active');
    images[index].classList.add('active');
    updateCircle(index);
    indexImages = index;
}

function navigateToImages(direction) {
    let index = indexImages;
    if (direction === 'next') {
        index = (indexImages + 1) % images.length;
    } else if (direction === 'prev') {
        index = (indexImages - 1 + images.length) % images.length;
    }
    showImages(index)
}

function scrollImagesByButton() {
    scrollButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            if (isButtonClicked) return;
            isButtonClicked = true;
            setTimeout(() => {
                isButtonClicked = false;
            }, 100)
            if (event.target.classList.contains('scroll-right')) {
                navigateToImages('next')
            } else if (event.target.classList.contains('scroll-left')) {
                navigateToImages('prev')
            }
        });
    })
}

function scrollImagesByKeyboard() {
    document.addEventListener('keydown', (event) => {
        if (["ArrowRight", "ArrowLeft"].includes(event.key)) {
            if (event.key === 'ArrowRight') {
                navigateToImages('next')
            } else if (event.key === 'ArrowLeft') {
                navigateToImages('prev');
            }
        }

    })
}

function autoChangeImages() {
    if (!isAutoScrolling) {
        isAutoScrolling = true;
        autoChangeInterval = setInterval(function () {
            let index = (indexImages + 1) % images.length;
            showImages(index);
        }, 1000 * timeOut)
    }
}

function stopAutoChangeImages() {
    clearInterval(autoChangeInterval);
    isAutoScrolling = false;
}

function toggleAutoScroll() {
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('stopper')) {
            if (isAutoScrolling) {
                stopAutoChangeImages();
            } else {
                autoChangeImages();
            }
        }
    })
}

function isScrollButton(event) {
    return event.target.closest('.scroll-button');
}

function touchDisplay(start, move, end) {
    sliderContainer.addEventListener(start, (event) => {
        if (isScrollButton(event) || (isButtonClicked)) return;
        startX = event.touches ? event.touches[0].clientX : event.clientX;
        document.addEventListener(move, onMove);
        document.addEventListener(end, onEnd);
    }, {passive: true});
}

function onMove(event) {
    if (!startX) return;
    endX = event.touches ? event.touches[0].clientX : event.clientX;

}

function onEnd(event) {
    if (isScrollButton(event)) return;
    const difference = startX - endX;
    if (difference > defaultDifference) {
        navigateToImages('next');
    } else if (difference < -defaultDifference) {
        navigateToImages('prev');
    }
}

touchDisplay('touchstart', 'touchmove', 'touchend');
touchDisplay('mousedown', 'mousemove', 'mouseup');

toggleAutoScroll();
generateImages();
generateCircles();
scrollImagesByButton();
scrollImagesByKeyboard()
showImages(indexImages);