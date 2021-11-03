window.addEventListener('load', function () {
    let movingBlock = document.querySelector('.moving-block');
    // Position Y
    let positionYInput = document.querySelector('#position-y');
    positionYInput.addEventListener('input', function () {
        movingBlock.style.top = positionYInput.value / 10 + 'rem';
    });
    // Position X
    let positionXInput = document.querySelector('#position-x');
    positionXInput.addEventListener('input', function () {
        movingBlock.style.left = positionXInput.value / 10 + 'rem';
    });
    // Size
    let size = document.querySelector('#size');
    size.addEventListener('input', function () {
        if (movingBlock.style.transform.includes('rotate(45deg)')) {
            movingBlock.style.transform = `scale(${size.value}) rotate(45deg)`;
        }
        else {
            movingBlock.style.transform = `scale(${size.value})`;
        }
    });
    // Opacity
    let opacity = document.querySelector('#opacity');
    opacity.addEventListener('input', function () {
        movingBlock.style.opacity = opacity.value;
    });
    // Shape Type
    let shapeSelect = document.querySelector('#shape-select');
    let okButton = document.querySelector('#shape-ok');
    okButton.addEventListener('click', function () {
        if (shapeSelect.value == '1') {
            movingBlock.style.borderRadius = '0';
            movingBlock.style.transform = `scale(${size.value}) rotate(0)`;
        }
        else if (shapeSelect.value == '3') {
            movingBlock.style.borderRadius = '0';
            if (movingBlock.style.transform.includes('rotate(45deg)')) {
            }
            else {
                movingBlock.style.transform += 'rotate(45deg)';
            }
        }
        else {
            movingBlock.style.borderRadius = '100%';
        }
    });
});