export const Catalog = () => {
    const wrapper = document.createElement('div');
    const main = document.createElement('main');

    wrapper.classList.add('wrapper');
    main.classList.add('catalog');
    main.innerHTML = 'hey!';

    console.log('good!');

    wrapper.appendChild(main);
    console.log(main);

}

