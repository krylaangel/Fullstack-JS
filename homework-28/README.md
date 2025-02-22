# Slider Documentation (Slider and TouchSlider)

## Description
The slider is designed to display an image gallery with navigation, auto-scrolling, and control via touch and keyboard events.

## Installation and Import
```javascript
import { TouchSlider } from "./TouchSlider.js";
```

## Usage
Creating a slider instance:
```javascript
const gallery = [
    'gory_sneg_relef_226184_1920x1080.jpg',
    'gory_vershiny_ozero_173286_1920x1080.jpg',
    'ozero_otrazhenie_gory_1223430_1920x1080.jpg'
];

const slider = new TouchSlider({
    gallery: gallery,
    galleryId: 'gallery',
    sliderId: 'sliderId',
    defaultDifference: 50,
    timeOut: 1,
    isDisplayStopButton: false
});
```

## Configuration

### **Constructor Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `gallery` | `Array` | Array of image paths |
| `galleryId` | `string` | ID of the image container |
| `sliderId` | `string` | ID of the main slider container |
| `defaultDifference` | `number` | Minimum swipe distance (px) to change the image |
| `timeOut` | `number` | Time (in seconds) between automatic image changes |
| `isDisplayStopButton` | `boolean` | Display auto-scroll control button |

## Functionality

### 1. **Image Generation**
The `generateImages()` method creates images based on the provided `gallery` array.

### 2. **Indicator (Circle) Generation**
The `generateCircles()` method creates navigation indicators for the images.

### 3. **Image Navigation**
- `navigateToImages(direction)` — changes the image forward/backward.
- `showImages(index)` — displays an image by index.

### 4. **Auto Scrolling**
- `toggleAutoChangeImages()` — enables/disables automatic image changes.
- `activationAutoChangeImages()` — starts auto-scrolling.
- `stopAutoChangeImages()` — stops auto-scrolling.

### 5. **Keyboard Control**
The `scrollImagesByKeyboard()` method allows navigation using the keyboard (left/right arrows).

### 6. **Touch and Mouse Events (only in `TouchSlider`)**
- `onStart(event)` — registers the initial touch or mouse press point.
- `onEnd(event)` — registers the final point and determines the swipe direction.

## Example HTML Structure
```html
<div id="sliderId">
    <div id="gallery" class="gallery-container"></div>
    <div class="circle__container"></div>
</div>
```

## Additional Methods
### **Method `addImage(url)`**
Adds a new image to the gallery and updates the slider.
```javascript
slider.addImage('new_image.jpg');
```

### **Method `removeImage(index)`**
Removes an image from the gallery by index.
```javascript
slider.removeImage(1);
```

## Conclusion
This slider supports interaction via keyboard, mouse, and touch devices. It can be easily customized to fit specific needs by adjusting configurations or styles.

