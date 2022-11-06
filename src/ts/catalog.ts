    // import { wrapper } from "./main";
    // import { main } from "./main";
    const wrapper:any = document.querySelector('.wrapper');
    const main:any = document.createElement('main');

    export const Card = (name:any, pricer:any, src:any, onAdd:any) => {

    const priceWrapper = document.createElement('div');
    const catalogElement = document.createElement('div');
    const sneakersName = document.createElement('div');
    const sneakersImage = document.createElement('img');
    const basketButton = document.createElement('button');
    const price = document.createElement('span');
    
    sneakersImage.src = src;
    sneakersName.innerText = name;
    price.innerText = pricer;
    basketButton.onclick = onAdd;
    
    main.classList.add('catalog');
    catalogElement.classList.add('catalog-element');
    sneakersImage.classList.add('sneakers-image');
    sneakersName.classList.add('sneakers-name');
    priceWrapper.classList.add('price-wrapper');
    basketButton.classList.add('basket-button');
    price.classList.add('price');
    
    wrapper?.appendChild(main);
    main.appendChild(catalogElement);
    catalogElement.appendChild(sneakersImage);
    catalogElement.appendChild(sneakersName);
    catalogElement.appendChild(priceWrapper);
    priceWrapper.appendChild(basketButton);
    priceWrapper.appendChild(price);
    
    return main;
}


// export const cardRender = (array:any) => {
//     main.innerHTML = '';
//     array.forEach((element: { name: any; price: any; src: any}) => {
//         Card(element.name, element.price, element.src);
//     });
// }

// НЕ ЗАБЫТЬ ДОБАВИТЬ АЛЬТЫ ДЛЯ КАРТИНОК