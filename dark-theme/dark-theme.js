const toggler = document.getElementById('toggler');
const body = document.querySelector('body');
const div = document.querySelector('div');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

toggler.addEventListener('click', function() {
    body.classList.toggle('active-body');
    div.classList.toggle('active-div');
    h1.classList.toggle('active-h1');
    p.classList.toggle('active-p');
});
