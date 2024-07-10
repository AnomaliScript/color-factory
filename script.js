const redSlider = document.getElementById('redIntensity');
const greenSlider = document.getElementById('greenIntensity');
const blueSlider = document.getElementById('blueIntensity');
const colorBox = document.querySelector('.mixing');

function updateColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;

    // Update the background color directly
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Initial call to set the color based on initial slider values
updateColor();