import {Slider} from "./Slider.js";

class TouchSlider extends Slider {
    startX = 0;
    endX = 0;

    constructor(params) {
        super(params);
    }

    setupEventListeners() {
        super.setupEventListeners();

        this.imagesContainer.addEventListener('touchstart', this.onStart.bind(this), {passive: false});
        this.imagesContainer.addEventListener('touchend', this.onEnd.bind(this));
        this.imagesContainer.addEventListener('mousedown', this.onStart.bind(this));
        this.imagesContainer.addEventListener('mouseup', this.onEnd.bind(this));
    }

    onStart(event) {
        this.startX = event.touches ? event.touches[0].clientX : event.clientX;
    }

    onEnd(event) {
        this.endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
        const difference = this.startX - this.endX;
        if (difference > this.defaultDifference) {
            this.navigateToImages(Slider.prevSlide);
        } else if (difference < -this.defaultDifference) {
            this.navigateToImages(Slider.nextSlide);
        }
    }
}

export {TouchSlider};
