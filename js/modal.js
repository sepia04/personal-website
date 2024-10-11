const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
    const buttonElem = document.querySelector(btnOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity ${time}ms ease-in-out;
    `;

    const closeModal = event => {
        const target = event.target;

        if (target === modalElem || btnClose && target.closest(btnClose) || event.code === 'Escape')
        {
            modalElem.style.opacity = 0;

            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, time);

            window.removeEventListener('keydown', closeModal);
        }
    }

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        window.addEventListener('keydown', closeModal);
    }

    buttonElem.addEventListener('click', openModal);
    modalElem.addEventListener('click', closeModal);
}

modalController({
    modal: '.contact-modal',
    btnOpen: '.contact-btn',
    btnClose: '.contact-modal-close',
    time: 400,
});