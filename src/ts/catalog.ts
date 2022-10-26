    const wrapper = document.querySelector('.wrapper');
    const main = document.createElement('main');

    const Catalog = (name:any, pricer:any, src:any) => {
    const priceWrapper = document.createElement('div');
    const catalogElement = document.createElement('div');
    const sneakersName = document.createElement('div');
    const sneakersImage = document.createElement('img');
    const basketButton = document.createElement('button');
    const price = document.createElement('span');
    
    // sneakersImage.alt="vintage brights sneakers";
    sneakersImage.src = src;
    
    sneakersName.innerText = name;
    price.innerText = pricer;
    
    main.classList.add('catalog');
    catalogElement.classList.add('catalog-element');
    sneakersImage.classList.add('sneakers-image');
    sneakersName.classList.add('sneakers-name');
    priceWrapper.classList.add('price-wrapper')
    basketButton.classList.add('basket-button');
    price.classList.add('price');
    
    wrapper?.appendChild(main);
    main.appendChild(catalogElement);
    catalogElement.appendChild(sneakersImage);
    catalogElement.appendChild(sneakersName);
    catalogElement.appendChild(priceWrapper);
    priceWrapper.appendChild(basketButton);
    priceWrapper.appendChild(price);

}


const sneakers:any = [{id: 1, name: 'New Balance 574 Vintage Brights', price: '$ 650', src: 'src/img/vintage.png'}, {id: 2, name: 'New Balance Made in UK 920 Chinese New Year', price: '$ 1 200', src: 'src/img/chinese.png'}, {id: 3, name: 'New Balance 373 Modern Classics', price: '$ 800', src: 'src/img/classic.png'}, {id: 4, name: 'New Balance Made in UK 670 Chinese New Year', price: '$ 780', src: 'src/img/chinese-brown.png'}, {id: 5, name: 'New Balance X-Racer Utility', price: '$ 1 000', src: 'src/img/racer.png'}, {id: 6, name: 'New Balance 5740 Think Colorfully', price: '$ 940', src: 'src/img/colorfully.png'}];

export const returnArray = () => {
    return sneakers.forEach((sneaker:any) => console.log(sneaker));
}




export const catalogRender = () => {
    main.innerHTML = '';
    sneakers.forEach((element: { name: any; price: any; src: any}) => {
        Catalog(element.name, element.price, element.src);
    });
}
