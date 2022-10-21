    const wrapper = document.querySelector('.wrapper');
    const main = document.createElement('main');

    export const Catalog = (name:any, pricer:any, src:any) => {
    const priceWrapper = document.createElement('div');
    const catalogElement = document.createElement('div');
    const sneakersName = document.createElement('div');
    const sneakersImage = document.createElement('img');
    const whiteBasket = document.createElement('img');
    const price = document.createElement('span');
    
    // sneakersImage.alt="vintage brights sneakers";
    sneakersImage.src = src;
    whiteBasket.src="src/icons/white-basket.svg";
    
    sneakersName.innerText = name;
    price.innerText = pricer;
    
    main.classList.add('catalog');
    catalogElement.classList.add('catalog-element');
    sneakersImage.classList.add('sneakers-image');
    sneakersName.classList.add('sneakers-name');
    priceWrapper.classList.add('price-wrapper')
    whiteBasket.classList.add('white-basket');
    price.classList.add('price');
    
    wrapper?.appendChild(main);
    main.appendChild(catalogElement);
    catalogElement.appendChild(sneakersImage);
    catalogElement.appendChild(sneakersName);
    catalogElement.appendChild(priceWrapper);
    priceWrapper.appendChild(whiteBasket);
    priceWrapper.appendChild(price);
}


const sneakers:any = [{name: 'New Balance 574 Vintage Brights', price: '$ 650', src: 'src/img/vintage.png'}, {name: 'New Balance Made in UK 920 Chinese New Year', price: '$ 1 200', src: 'src/img/chinese.png'}, {name: 'New Balance 373 Modern Classics', price: '$ 800', src: 'src/img/classic.png'}, {name: 'New Balance Made in UK 670 Chinese New Year', price: '$ 780', src: 'src/img/chinese-brown.png'}, {name: 'New Balance X-Racer Utility', price: '$ 1 000', src: 'src/img/racer.png'}, {name: 'New Balance 5740 Think Colorfully', price: '$ 940', src: 'src/img/colorfully.png'}];

export const render = () => {
    main.innerHTML = '';
    sneakers.forEach((element: { name: any; price: any; src: any}) => {
        Catalog(element.name, element.price, element.src);
    });
}
