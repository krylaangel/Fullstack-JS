const imagesContainer = document.getElementById('gallery');
const leftButton = document.querySelector('.scroll-left');
const rightButton = document.querySelector('.scroll-right');
const circleContainer = document.querySelector('.circle__container');
const stopper = document.querySelector('.stopper');
const timeOut = 1;
let isAutoScrolling = false;
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
    const fragment = new DocumentFragment();
    gallery.forEach(file => {
        const img = document.createElement('img');
        img.src = 'images/' + file;
        img.alt = file;
        img.classList.add('image');
        fragment.appendChild(img);
        images.push(img);
    })
    imagesContainer.appendChild(fragment);
}

function generateCircles() {
    circleContainer.innerHTML = '';
    const fragment = new DocumentFragment();
    images.forEach((_, index) => {
        const circle = document.createElement("div");
        circle.classList.add('circle');

        if (index === 0) {
            circle.classList.add('active');
        }
        circle.addEventListener('click', () => {
            showImages(index);
        })
        fragment.appendChild(circle);
    });
    circleContainer.appendChild(fragment);
}

function updateCircle(index) {
    document.querySelectorAll('.circle').forEach((circle, i) => {
        circle.classList.toggle('active', i === index);
    })
}

function showImages(index) {
    images[indexImages]?.classList.remove('active');
    images[index]?.classList.add('active');
    updateCircle(index);
    indexImages = index;
}

function navigateToImages(direction) {
    let index = indexImages;
    if (direction === 'next') {
        index++;
        if (index === images.length) {
            index = 0;
        }
    } else if (direction === 'prev') {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
    }
    showImages(index);
}

function scrollImagesByKeyboard() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            navigateToImages('next');
        } else if (event.key === 'ArrowLeft') {
            navigateToImages('prev');
        }
        event.preventDefault();
    });
}

function toggleAutoChangeImages() {

    if (isAutoScrolling) {
        clearInterval(autoChangeInterval);
        isAutoScrolling = false;
    } else {
        isAutoScrolling = true;
        autoChangeInterval = setInterval(function () {
            navigateToImages('next');
        }, 1000 * timeOut)
    }
}

function onStart(event) {
    startX = event.touches ? event.touches[0].clientX : event.clientX;
}

function onEnd(event) {
    console.log(event);
    endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
    const difference = startX - endX;
    if (difference > defaultDifference) {
        navigateToImages('prev');
    } else if (difference < -defaultDifference) {
        navigateToImages('next');
    }
}

imagesContainer.addEventListener('touchstart', onStart, {passive: false});
imagesContainer.addEventListener('touchend', onEnd);
imagesContainer.addEventListener('mousedown', onStart);
imagesContainer.addEventListener('mouseup', onEnd);
stopper.addEventListener('click', toggleAutoChangeImages);
rightButton.addEventListener('click', () => {
    navigateToImages('next');
});
leftButton.addEventListener('click', () => {
    navigateToImages('prev');
});

generateImages();
generateCircles();
scrollImagesByKeyboard()
showImages(indexImages);