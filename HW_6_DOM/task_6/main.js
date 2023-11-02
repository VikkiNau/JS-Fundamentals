/*
 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, від яких буде залежати ціна товару.
*/
/*
    Поки 1 варіація, без випадайки :(  
*/

const gradients = document.querySelectorAll('.gradient');
const shoeImages = document.querySelectorAll('.shoe');
const colors = document.querySelectorAll('.color');
const outPrice = document.getElementById('outprice');

const inform = document.querySelector('.info');
const options = document.createElement('div');
inform.appendChild(options);
const giftPack = document.createElement('input');
options.appendChild(giftPack);
giftPack.id = 'packed';
giftPack.setAttribute('type', 'checkbox');
const label = document.createElement('label');
options.appendChild(label);
label.setAttribute('for', 'packed');
label.innerHTML = 'Gift pack'



function changeShoeColor(color, price) {
    const changePrice = changePriceWithGiftPack(price);
    outPrice.textContent = changePrice;

    shoeImages.forEach((shoeImage) => {
        shoeImage.classList.remove('show');
        if (shoeImage.getAttribute('color') === color) {
            shoeImage.classList.add('show');
        }
    });

    gradients.forEach((background) => {
        background.classList.remove('second');
        if (background.getAttribute('color') === color) {
            background.classList.add('second');
        }
    });

    colors.forEach((colorElement) => {
        colorElement.classList.remove('active');
        if (colorElement.getAttribute('color') === color) {
            colorElement.classList.add('active');
        }
    });
}

gradients.forEach((gradient) => {
    gradient.addEventListener('click', () => {
        const selectedColor = gradient.getAttribute('color');
        const selectedPrice = gradient.getAttribute('data-price');
        changeShoeColor(selectedColor, selectedPrice);
    });
});

colors.forEach((color) => {
    color.addEventListener('click', () => {
        const selectedColor = color.getAttribute('color');
        const selectedPrice = color.getAttribute('data-price');
        changeShoeColor(selectedColor, selectedPrice);

    });
});

function changePriceWithGiftPack(price) {
    if (giftPack.checked) {
        return price * 1.03;
    } else {
        return price;
    }
}

giftPack.addEventListener('change', () => {
    const selectedColor = document.querySelector('.color.active').getAttribute('color');
    const selectedPrice = document.querySelector('.color.active').getAttribute('data-price');
    changeShoeColor(selectedColor, selectedPrice);
})