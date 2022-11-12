
export const Promo = () => {
    // discount:any

    const promo = document.createElement('div');
    const promoTitle = document.createElement('div');
    const inputWrapper = document.createElement('div');
    const promoInput = document.createElement('input');
    const promoButton = document.createElement('button');

    // if (promoInput.value === 'bober') {
    //     const discount = (total:any) => {
    //         total -= 3
    //     }
    // }

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

    return promo;
}     