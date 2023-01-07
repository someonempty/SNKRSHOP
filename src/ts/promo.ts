
export const Promo = (onDiscount:Function) => {

    const promo = document.createElement('div');
    const promoTitle = document.createElement('div');
    const inputWrapper = document.createElement('div');
    const promoInput = document.createElement('input');
    const promoButton = document.createElement('button');
    const form = document.createElement('form');

    promoButton.addEventListener('click', (e) => {
        e.preventDefault();
        onDiscount(promoInput.value)
        console.log(onDiscount(promoInput.value));
        promoInput.value = '';
        
    })

    promoTitle.innerText = 'Promo code';
    promoButton.innerText = 'Apply';

    promoInput.placeholder="Placeholder Text";
    promo.classList.add('promo');

    promo.appendChild(promoTitle);
    promo.appendChild(inputWrapper);
    inputWrapper.appendChild(form);
    form.appendChild(promoInput);
    form.appendChild(promoButton);

    promoTitle.classList.add('promo-title');
    promoInput.classList.add('promo-input');
    promoButton.classList.add('promo-button');


    return promo;
}     