const modalOpener = document.querySelector('.open-modal');

modalOpener.addEventListener('click', function() {
    const modal = document.querySelector('#modal');
    modalOpener.classList.add('modal-hidden');
    modal.classList.add('modal-active');

    const exits = document.querySelectorAll('.clear');
    exits.forEach(function(exit) {
        exit.addEventListener('click', function() {
            modal.classList.remove('modal-active');
            modalOpener.classList.remove('modal-hidden');
        });
    })
});
