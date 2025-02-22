import {TouchSlider} from "./TouchSlider.js";

const gallery = [
    'gory_sneg_relef_226184_1920x1080.jpg',
    'gory_vershiny_ozero_173286_1920x1080.jpg',
    'ozero_otrazhenie_gory_1223430_1920x1080.jpg'
]
const gallery1 = [
    'gory_sneg_relef_226184_1920x1080.jpg',
    'gory_vershiny_ozero_173286_1920x1080.jpg',
    'ozero_otrazhenie_gory_1223430_1920x1080.jpg'
]

const slider = new TouchSlider({
        gallery: gallery,
        galleryId: 'gallery',
        sliderId: 'sliderId',
        defaultDifference: 50,
        timeOut: 1,
        isDisplayStopButton: false
    }
);
const slider1 = new TouchSlider(
    {
        gallery: gallery1, galleryId: 'gallery1', sliderId: 'sliderId1', defaultDifference: 50, timeOut: 1
    });
