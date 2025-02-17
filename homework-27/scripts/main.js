const images = document.querySelectorAll('.image');
const scrollButtons = document.querySelectorAll('.scroll-button');
const circleContainer = document.querySelector('.circle__container');
const timeOut = 1;
let isAutoScrolling = false;
let autoChangeInterval;
let indexImages = 0;



function generateImages(){

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

toggleAutoScroll();
// autoChangeImages();
generateCircles();
scrollImagesByButton();
scrollImagesByKeyboard()
showImages(indexImages);