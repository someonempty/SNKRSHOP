const aside:any = document.querySelector('.aside');

export const Promo = () => {
    const promo = document.createElement('div');
    const promoTitle = document.createElement('div');
    const inputWrapper = document.createElement('div');
    const promoInput = document.createElement('input');
    const promoButton = document.createElement('button');

    promoTitle.innerText = 'Promo code';
    promoButton.innerText = 'Apply';

    promoInput.placeholder="Placeholder Text";
    promo.classList.add('promo');

    promo.appendChild(promoTitle);
    promo.appendChild(inputWrapper);
    inputWrapper.appendChild(promoInput);
    inputWrapper.appendChild(promoButton);

    promoTitle.classList.add('promo-title');
    promoInput.classList.add('promo-input');
    promoButton.classList.add('promo-button');
    aside.appendChild(promo);
}

            