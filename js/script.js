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
    // HEX
    let hex = document.querySelector('#hex');
    hex.addEventListener('keyup', function () {
        movingBlock.style.background = '#' + hex.value;
    });
    // RGBA
    let rgbaR = document.querySelector('#rgba-r');
    let rgbaG = document.querySelector('#rgba-g');
    let rgbaB = document.querySelector('#rgba-b');
    let rgbaA = document.querySelector('#rgba-a');
    let rgbaContainer = document.querySelectorAll('.control-block__rgba-range');
    rgbaContainer.forEach(function (e) {
        e.addEventListener('input', function () {
            movingBlock.style.background = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
        });
    });
    // Reset
    let reset = document.querySelector('.reset__button');
    reset.addEventListener('click', function () {
        movingBlock.style.top = '0';
        movingBlock.style.left = '0';
        movingBlock.style.transform = `scale(1) rotate(0deg)`;
        movingBlock.style.opacity = '1';
        movingBlock.style.borderRadius = '100%';
        movingBlock.style.background = 'radial-gradient(#ff8c00, #800080, #9400d3, #00fa9a, #191970, #7b68ee)';
    });
});