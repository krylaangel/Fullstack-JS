export class Slider {
    static nextSlide = 'next';
    static prevSlide = 'prev';
    indexImages = 0;
    isAutoScrolling = false;
    autoChangeInterval;
    images = [];
    leftButton;
    rightButton;
    stopper;

    constructor(params) {
        const defaultOptions = {
            gallery: [],
            galleryId: '',
            sliderId: '',
            defaultDifference: 50,
            timeOut: 1,
            isDisplayStopButton: true
        }
        const options = {
            ...defaultOptions,
            ...params
        }

        this.slider = document.getElementById(options.sliderId);
        this.imagesContainer = document.getElementById(options.galleryId);
        this.circleContainer = document.querySelector(`#${options.sliderId} .circle__container`);
        this.timeOut = options.timeOut;
        this.defaultDifference = options.defaultDifference;
        this.gallery = options.gallery;
        this.isDisplayStopButton = options.isDisplayStopButton;

        this.generateImages();
        this.generateCircles();
        this.scrollImagesByKeyboard()
        this.showImages(this.indexImages);
        this.setupEventListeners();
        this.generateButtonsNavigation();
        this.generateButtonAutoChange();
    }

    setupEventListeners() {
        this.imagesContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('image') || event.target === this.stopper) {
                this.toggleAutoChangeImages();
            }            this.imagesContainer.focus();
        });
    }

    generateImages() {
        this.imagesContainer.innerHTML = '';
        this.images = [];
        const fragment = new DocumentFragment();
        this.gallery.forEach(file => {
            const img = document.createElement('img');
            img.src = 'images/' + file;
            img.alt = file;
            img.classList.add('image');
            fragment.appendChild(img);
            this.images.push(img);
        })
        this.imagesContainer.appendChild(fragment);
    }

    generateCircles() {
        this.circleContainer.innerHTML = '';
        const fragment = new DocumentFragment();
        this.images.forEach((_, index) => {
            const circle = document.createElement("div");
            circle.classList.add('circle');

            if (index === 0) {
                circle.classList.add('active');
            }
            circle.addEventListener('click', () => {
                this.showImages(index);
            })
            fragment.appendChild(circle);
        });
        this.circleContainer.appendChild(fragment);
    }

    createButtonElement(container, pictureButton, teg, selector, otherSelector) {
        const button = document.createElement(teg);
        button.classList.add(selector, otherSelector);
        button.innerHTML = pictureButton;
        container.appendChild(button);
        return button;
    }

    generateButtonsNavigation() {
        this.leftButton = this.createButtonElement(this.imagesContainer, '&#10094;', 'div', 'scroll-left', 'scroll-button');
        this.rightButton = this.createButtonElement(this.imagesContainer, '&#10095;', 'div', 'scroll-right', 'scroll-button');
        this.rightButton.addEventListener('click', () => {
            this.navigateToImages(Slider.nextSlide);
        });
        this.leftButton.addEventListener('click', () => {
            this.navigateToImages(Slider.prevSlide);
        });
    }

    generateButtonAutoChange() {
        if (this.isDisplayStopButton) {
            this.stopper = this.createButtonElement(this.slider, '&#10095;', 'div', 'stopper');
            this.stopper.addEventListener('click', this.toggleAutoChangeImages.bind(this));
        }
    }

    updateCircle(index) {
        this.circleContainer.querySelectorAll('.circle').forEach((circle, i) => {
            circle.classList.toggle('active', i === index);
        })
    }

    showImages(index) {
        this.images[this.indexImages]?.classList.remove('active');
        this.images[index]?.classList.add('active');
        this.updateCircle(index);
        this.indexImages = index;
    }

    navigateToImages(direction) {
        let index = this.indexImages;
        if (direction === 'next') {
            index++;
            if (index === this.images.length) {
                index = 0;
            }
        } else if (direction === 'prev') {
            index--;
            if (index < 0) {
                index = this.images.length - 1;
            }
        }
        this.showImages(index);
    }

    scrollImagesByKeyboard() {
        this.imagesContainer.setAttribute('tabindex', '0');
        this.imagesContainer.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                this.navigateToImages('next');
            } else if (event.key === 'ArrowLeft') {
                this.navigateToImages('prev');
            }
            event.preventDefault();
        });
    }

    toggleAutoChangeImages() {
        if (this.isAutoScrolling) {
            this.stopAutoChangeImages()
            this.stopper.innerHTML = '&#10095;';
        } else {
            this.startAutoChangeImages();
            this.stopper.innerHTML = '&#9608;';
        }
    }

    startAutoChangeImages() {
        this.isAutoScrolling = true;
        this.autoChangeInterval = setInterval(() => {
            this.navigateToImages('next');
        }, 1000 * this.timeOut)
    };

    stopAutoChangeImages() {
        clearInterval(this.autoChangeInterval);
        this.isAutoScrolling = false;
    }
}


